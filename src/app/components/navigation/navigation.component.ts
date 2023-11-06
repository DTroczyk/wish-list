import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import User from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat/chat.service';
import { UserResponse, UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
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
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
