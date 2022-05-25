import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import Chat, { Channel } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat/chat.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddOrEditChannelDialogComponent } from './add-or-edit-channel-dialog/add-or-edit-channel-dialog.component';

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
    private userService: UserService,
    private dialog: MatDialog
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

  addOrEditChannel(chat?: Chat) {
    const data = chat
      ? ({ id: chat.id, name: chat.name, users: [...chat.users] } as Channel)
      : null;
    const dialogRef = this.dialog.open(AddOrEditChannelDialogComponent, {
      data,
      maxWidth: '100vw',
      width: '400px',
      maxHeight: '85vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  isChatOwner(): boolean {
    return (
      this.selectedChannel.owner.toLowerCase() ===
      this.userService.getLoggedUser.login?.toLowerCase()
    );
  }
}
