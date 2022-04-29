import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import Chat from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat/chat.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  public chats: Chat[];
  public selectedChannel: Chat;
  public ownerLogin: string;
  public messageText!: string;
  public isChannelsHidden: boolean = true;
  public isChatsLoading: boolean = true;

  private chatSubject: Subject<Chat[]>;
  private subs: Subscription;

  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.selectedChannel = null as any;
    this.chats = chatService.chats;
    this.chatSubject = chatService.chatsSubject;
    this.subs = new Subscription();
    this.ownerLogin = userService.user?.login ? userService.user.login : '';
  }

  ngOnInit(): void {
    this.subs.add(
      this.chatSubject.subscribe((res) => {
        this.chats = res;
        this.isChatsLoading = false;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  selectChannel(chat: Chat) {
    this.selectedChannel = chat;
  }

  sendMessage() {
    console.log(this.messageText);
  }
}
