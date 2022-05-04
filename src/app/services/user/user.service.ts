import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { users } from 'src/app/models/temp-data';
import User from 'src/app/models/user';
import Wish from 'src/app/models/wish';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  public userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    null as any
  );

  private _user!: User | null;
  private subs: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

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

  addOrEditWish(wish: Wish) {
    if (wish) {
      if (wish.price) wish.price = wish.price * 100;

      if (this._user?.wishes.find((w) => w.id === wish.id)) {
        this._user.wishes = this._user.wishes.map((w) =>
          w.id === wish.id ? (w = wish) : w
        );
      } else {
        // Set id
        if (this._user)
          wish.id = this._user?.wishes[this._user.wishes.length - 1].id + 1;

        this._user?.wishes.push(wish);
      }

      console.log(this._user);
      this.userSubject.next(this._user as User);
    }
  }

  daleteWish(wishId: number) {
    if (this._user) {
      this._user.wishes = this._user?.wishes.filter((w) => w.id !== wishId);
      this.userSubject.next(this._user);
    }
  }
}
