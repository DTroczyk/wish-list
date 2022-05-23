import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import User from './models/user';
import { ChatService } from './services/chat/chat.service';
import { UserResponse, UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  user: User = null as any;
  subject: Subject<UserResponse> = this.userService.userSubject;
  subs: Subscription = new Subscription();
  unreadMessagesCount: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.subject.subscribe((val) => {
        this.user = val.user;
      })
    );
    this.subs.add(
      this.chatService.unreadMessagesSubject.subscribe(
        (count) => (this.unreadMessagesCount = count)
      )
    );
    this.userService.login('joedoe', 'h');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
