import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import Chat from 'src/app/models/chat';
import { SampleUsers } from '../../test/data/sampleUsers';
import { UserService } from '../user/user.service';

import { ChatService } from './chat.service';

describe('ChatService', () => {
  let service: ChatService;
  let userService: UserService;
  let subs = new Subscription();
  let chats: Chat[] = [];
  let unreadMessages: number = 0;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    userService = TestBed.inject(UserService);
    userService.userSubject.next({ user: { ...SampleUsers[0] }, status: 0 });
    service = TestBed.inject(ChatService);

    chats = [];
    subs.add(service.chatsSubject.subscribe((res) => (chats = res)));
    subs.add(
      service.unreadMessagesSubject.subscribe((res) => (unreadMessages = res))
    );
  });

  afterEach(() => {
    subs.unsubscribe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load chats', () => {
    expect(chats.length).toEqual(2);
    expect(chats[0].name).toEqual('Chat 1');
    expect(chats[1].name).toEqual('Chat 2');

    //@ts-ignore
    expect(service.username).toEqual('user1');
  });

  it('should get unread chats count', () => {
    expect(unreadMessages).toEqual(2);
  });

  it('should send message', () => {
    expect(chats[1].messages.length).toEqual(2);
    service.sendMessage('Hi', 2);
    expect(chats[1].messages.length).toEqual(3);
  });
});
