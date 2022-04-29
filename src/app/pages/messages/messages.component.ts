import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
    this.selectedChannel = this.chats[0];
    this.chatSubject = chatService.chatsSubject;
    this.subs = new Subscription();
    this.ownerLogin = userService.user?.login ? userService.user.login : '';
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  selectChannel(chat: Chat) {
    this.selectedChannel = chat;
    this.isChannelsHidden = true;
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
