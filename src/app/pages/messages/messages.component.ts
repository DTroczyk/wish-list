import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Chat from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat/chat.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  public chats!: Chat[];
  public selectedChannel: Chat;
  public ownerLogin!: string;
  public messageText!: string;
  public isChannelsHidden: boolean = true;
  public isChatsLoading: boolean = true;

  private subs: Subscription;

  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.selectedChannel = null as any;
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.subs.add(
      this.userService.userSubject.subscribe((res) => {
        if (res.user) this.ownerLogin = res.user.login;
      })
    );
    this.subs.add(
      this.chatService.chatsSubject.subscribe((res) => {
        this.chats = res;
        this.isChatsLoading = false;
        if (this.selectedChannel === null && res !== null)
          this.selectChannel(res[0]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  selectChannel(chat: Chat) {
    this.selectedChannel = chat;
    this.isChannelsHidden = true;
    setTimeout(() => this.chatService.updateLastAccess(chat.id));
  }

  sendMessage() {
    this.chatService.sendMessage(this.messageText, this.selectedChannel.id);
    this.messageText = '';
  }

  displayDate(date: Date): string {
    return `
    ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
    ${date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }`;
  }
}
