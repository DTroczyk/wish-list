import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { users } from 'src/app/models/temp-data';
import User from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  public userSubject: Subject<User> = new Subject<User>();
  public get user() {
    return this._user;
  }

  private _user!: User | null;
  private subs: Subscription = new Subscription();

  login(username: string, password: string): boolean {
    this._user = users.find(
      (user) => user.login.toLowerCase() === username.toLowerCase()
    ) as User | null;

    if (this._user) {
      this.userSubject.next(this._user as User);
      return true;
    }
    this._user = null;

    this.userSubject.next(this._user as any);
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
