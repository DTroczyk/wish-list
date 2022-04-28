import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { users } from 'src/app/models/temp-data';
import User from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  userSubject: Subject<User> = new Subject<User>();

  private _user!: User | null;
  private subs: Subscription = new Subscription();

  login(username: string, password: string): boolean {
    this._user = users.find((user) => user.login === username) as User | null;
    if (this._user !== null) {
      this.userSubject.next(this._user);
      return true;
    }

    return false;
  }

  logout(): boolean {
    this.userSubject.next(null as any);

    return true;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
