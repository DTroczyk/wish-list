import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import User from './models/user';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  user: User = null as any;
  subject: Subject<User> = this.userService.userSubject;
  sub: Subscription = new Subscription();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.subject.subscribe((val) => {
      this.user = val;
    });
    this.subject.next({
      login: 'JoeDoe',
      email: 'JoeDoe@ex.pl',
      firstName: 'Dominik',
      lastName: 'Doe',
      wishes: [],
      friends: [],
      chats: [],
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
