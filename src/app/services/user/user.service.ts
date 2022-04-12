import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: Subject<User> = new Subject<User>();

  login(username: string, password: string): boolean {
    this.user.next({
      login: 'JoeDoe',
      email: 'JoeDoe@ex.pl',
      firstName: 'Joe',
      lastName: 'Doe',
    });
    return true;
  }

  logout(): boolean {
    this.user.next(null as any);
    console.log(this.user);

    return true;
  }
}
