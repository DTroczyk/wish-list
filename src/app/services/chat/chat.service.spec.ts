import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import Chat from 'src/app/models/chat';
import { UserService } from '../user/user.service';

import { ChatService } from './chat.service';
import { SampleChats } from './sampleChats';

describe('ChatService', () => {
  let service: ChatService;
  let subs = new Subscription();
  let chats: Chat[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    service = TestBed.inject(ChatService);

    // @ts-ignore
    service._chats = [...SampleChats];
    subs.add(service.chatsSubject.subscribe((res) => (chats = res)));
  });

  afterEach(() => {
    subs.unsubscribe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load chats', fakeAsync(() => {
    chats = [];
    service.chatsSubject.next([...SampleChats]);
    tick(10000);
    expect(chats.length).toEqual(2);
  }));
});
