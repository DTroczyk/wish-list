import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { wishes } from 'src/app/models/temp-data';
import User from 'src/app/models/user';
import Wish from 'src/app/models/wish';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class WishService implements OnDestroy {
  public userWishesSubject: BehaviorSubject<Wish[]>;
  public wishesSubject: BehaviorSubject<Wish[]>;
  public updateWish: Subject<Wish>;

  private userWishes!: Wish[];
  private user!: User;
  private wishes!: Wish[];
  private subs: Subscription;

  constructor(private userService: UserService) {
    this.subs = new Subscription();
    this.userWishesSubject = new BehaviorSubject<Wish[]>([]);
    this.wishesSubject = new BehaviorSubject<Wish[]>([]);
    this.updateWish = new Subject<Wish>();
    this.subs.add(
      this.userService.userSubject.subscribe((res) => {
        this.user = res.user;
        this.setWishes(res.user?.wishes);
      })
    );
  }

  ngOnDestroy(): void {}

  setWishes(wishes: Wish[]) {
    if (wishes) {
      this.userWishes = wishes;
      this.userWishesSubject.next([...this.userWishes]);
    }
  }

  getWishes() {
    this.wishes = wishes.filter(
      (wish) => wish.userId.toLowerCase() !== this.user.login.toLowerCase()
    );
    this.wishesSubject.next([...this.wishes]);
  }

  addOrEditWish(wish: Wish) {
    setTimeout(() => {
      if (wish && this.userWishes) {
        if (wish.price) wish.price = wish.price * 100;

        if (this.userWishes.find((w) => w.id === wish.id)) {
          this.userWishes = this.userWishes.map((w) =>
            w.id === wish.id ? (w = wish) : w
          );
        } else {
          // Set id
          if (this.userWishes)
            wish.id = this.userWishes[this.userWishes.length - 1].id + 1;

          this?.userWishes.push(wish);
        }
        this.userWishesSubject.next([...this.userWishes]);
      }
    }, 1000);
  }

  deleteWish(wishId: number) {
    if (this.userWishes) {
      this.userWishes = this.userWishes.filter((w) => w.id !== wishId);
      this.userWishesSubject.next([...this.userWishes]);
    }
  }

  assignUser(wishId: number, amount: number) {
    if (this.user) {
      let wish = this.wishes.find((w) => w.id === wishId);
      if (wish && amount > 0) {
        wish.status += amount;
        wish.assignedTo.push({ user: this.user.login, value: amount });
        this.wishesSubject.next([...this.wishes]);
        this.updateWish.next({ ...wish });
      }
    }
  }

  wishVisibility(item: Wish): boolean {
    // always show the owner
    if (
      this.user &&
      item.userId.toLowerCase() === this.user.login.toLowerCase()
    ) {
      return true;
    }
    // visibility === undefinied = visible for all friends
    else if (
      item.visibility === undefined ||
      (Array.isArray(item.visibility) && item.visibility.length === 0)
    ) {
      let userFriends = this.userService.getUserFriends(item.userId);
      return userFriends.find(
        (v) => v.toLowerCase() === this.user?.login.toLowerCase()
      )
        ? true
        : false;
    }
    // visibility.length > 0 = show for specific people
    else if (
      this.user &&
      Array.isArray(item.visibility) &&
      item.visibility.length > 0
    ) {
      return item.visibility.find(
        (v) => v.toLowerCase() === this.user?.login.toLowerCase()
      )
        ? true
        : false;
    }
    // visibility === true = show to all users
    else if (item.visibility === true) {
      return true;
    }
    // visibility === false = private
    if (item.visibility === false) {
      return false;
    }
    // else don't show
    return false;
  }
}
