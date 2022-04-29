import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import Chat from 'src/app/models/chat';
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
          this.chatsSubject.next(this._chats);
          this.unreadMessagesSubject.next(0);
        }
      })
    );
  }

  private unreadMessages() {
    let chats = [...this._chats];
    chats = chats.filter((chat) => {
      let isUnread = chat.lastAccess.find((la) => {
        if (
          la.chatId === chat.id &&
          la.user.toLowerCase() === this.username.toLowerCase() &&
          la.date.getDate() < Date.now()
        )
          return true;
        return false;
      });
      return isUnread !== undefined;
    });

    this.unreadMessagesSubject.next(chats.length);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
