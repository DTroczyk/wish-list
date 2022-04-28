import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import Chat from 'src/app/models/chat';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements OnDestroy {
  public chatsSubject: Subject<Chat[]>;

  private subs: Subscription = new Subscription();
  private _chats: Chat[];

  constructor(private userService: UserService) {
    this.chatsSubject = new Subject<Chat[]>();
    this._chats = [];
    this.subs.add(this.chatsSubject.subscribe((res) => (this._chats = res)));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
