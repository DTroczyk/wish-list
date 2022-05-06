import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import Chat, { LastAccess, Message } from 'src/app/models/chat';
import { UserResponse, UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements OnDestroy {
  public chatsSubject: BehaviorSubject<Chat[]>;
  public unreadMessagesSubject: Subject<number>;

  private userSubject: Subject<UserResponse>;
  private subs: Subscription = new Subscription();
  private _chats: Chat[];
  private username: string;

  constructor(private userService: UserService) {
    this.userSubject = this.userService.userSubject;
    this.chatsSubject = new BehaviorSubject<Chat[]>([]);
    this.unreadMessagesSubject = new BehaviorSubject<number>(0);
    this._chats = [];
    this.username = '';
    this.subs.add(
      this.userSubject.subscribe((res) => {
        if (res.user) {
          this._chats = this.sortMessages(res.user.chats);
          this.username = res.user.login;
          this.chatsSubject.next(this._chats);
          this.unreadMessages();
        } else {
          this._chats = null as any;
          this.username = '';
          this.chatsSubject.next(this._chats);
          this.unreadMessagesSubject.next(0);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private sortMessages(chats: Chat[]): Chat[] {
    return chats.map((chat) => {
      let sortedMessages = chat.messages.sort(
        (a, b) => a.postDate.getTime() - b.postDate.getTime()
      );
      return {
        ...chat,
        messages: sortedMessages,
      };
    });
  }

  private unreadMessages() {
    let chatsRead = [...this._chats];
    chatsRead = chatsRead.filter((chat) => {
      let isRead = chat.lastAccess.find((la) => {
        if (
          la.chatId === chat.id &&
          la.user.toLowerCase() === this.username.toLowerCase() &&
          la.date.getTime() >=
            chat.messages[chat.messages.length - 1]?.postDate.getTime()
        )
          return true;
        return false;
      });
      return isRead !== undefined;
    });

    // Substract read from total chats
    let result = this._chats.length - chatsRead.length;
    this.unreadMessagesSubject.next(result);
  }

  public sendMessage(message: string, chatId: number): void {
    if (message && chatId) {
      let newMessage: Message = {
        chatId: chatId,
        text: message,
        author: this.username,
        postDate: new Date(),
      };

      let chat = this._chats.find((chat) => chat.id === chatId);
      chat?.messages.push(newMessage);

      this.updateLastAccess(chatId);
    }
  }

  public updateLastAccess(chatId: number) {
    if (this.username !== '') {
      let lastAccess;
      let chat = this._chats.find((chat) => chat.id === chatId);
      if (chat) {
        lastAccess = chat.lastAccess.find(
          (la) => la.user.toUpperCase() === this.username.toUpperCase()
        );

        if (lastAccess) {
          lastAccess.date = new Date();
        } else {
          lastAccess = {
            date: new Date(),
            user: this.username,
            chatId: chatId,
          } as LastAccess;
          chat.lastAccess.push(lastAccess);
        }
      } else {
        console.error(`Chat id: ${chatId} is not found`);
        return;
      }

      this.chatsSubject.next(this._chats);
      this.unreadMessages();
    }
  }
}
