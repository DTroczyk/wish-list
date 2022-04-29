import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import Chat, { Message } from 'src/app/models/chat';
import User from 'src/app/models/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements OnDestroy {
  public chatsSubject: Subject<Chat[]>;
  public get chats(): Chat[] {
    return this._chats;
  }
  public unreadMessagesSubject: Subject<number>;

  private userSubject: Subject<User>;
  private subs: Subscription = new Subscription();
  private _chats: Chat[];
  private username: string;

  constructor(private userService: UserService) {
    this.userSubject = this.userService.userSubject;
    this.chatsSubject = new Subject<Chat[]>();
    this.unreadMessagesSubject = new Subject<number>();
    this._chats = [];
    this.username = '';
    this.subs.add(
      this.userSubject.subscribe((res) => {
        if (res) {
          this._chats = res.chats;
          this.username = res.login;
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

  private unreadMessages() {
    let chats = [...this._chats];
    chats = chats.filter((chat) => {
      let isUnread = chat.lastAccess.find((la) => {
        if (
          la.chatId === chat.id &&
          la.user.toLowerCase() === this.username.toLowerCase() &&
          la.date.getTime() <
            chat.messages[chat.messages.length - 1]?.postDate.getTime()
        )
          return true;
        return false;
      });
      return isUnread !== undefined;
    });

    this.unreadMessagesSubject.next(chats.length);
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
      } else return;
      if (lastAccess) {
        lastAccess.date = new Date();
      } else return;

      this.chatsSubject.next(this._chats);
      this.unreadMessages();
    }
  }
}
