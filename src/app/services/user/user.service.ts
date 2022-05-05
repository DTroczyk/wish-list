import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { users } from 'src/app/models/temp-data';
import User from 'src/app/models/user';
import { WishService } from '../wish/wish.service';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy, OnInit {
  public userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    null as any
  );

  private _user!: User | null;
  private subs: Subscription = new Subscription();

  constructor(private wishService: WishService) {}

  ngOnInit(): void {
    this.subs.add(
      this.wishService.wishesSubject.subscribe((res) => {
        if (this._user) this._user.wishes = res;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  login(username: string, password: string): boolean {
    this._user = users.find(
      (user) => user.login.toLowerCase() === username.toLowerCase()
    ) as User | null;

    if (this._user) {
      this.wishService.setWishes([...this._user.wishes]);
      this.userSubject.next({ ...this._user } as User);
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
}
