import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
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

  private userWishes!: Wish[];
  private user!: User;
  private wishes!: Wish[];
  private subs: Subscription;
  private wishesDataBase: Wish[] = [...wishes];

  constructor(private userService: UserService) {
    this.subs = new Subscription();
    this.userWishesSubject = new BehaviorSubject<Wish[]>([]);
    this.wishesSubject = new BehaviorSubject<Wish[]>([]);
    this.subs.add(
      this.userService.userSubject.subscribe((res) => {
        this.user = res.user;
        if (this.user) {
          this.getUserWishes();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getUserWishes() {
    this.userWishes = this.wishesDataBase.filter(
      (wish) => wish.userId.toLowerCase() === this.user.login.toLowerCase()
    );
    this.userWishesSubject.next([...this.userWishes]);
  }

  getWishes() {
    this.wishes = this.wishesDataBase.filter(
      (wish) => wish.userId.toLowerCase() !== this.user.login.toLowerCase()
    );
    this.wishesSubject.next([...this.wishes]);
  }

  addOrEditWish(wish: Wish) {
    setTimeout(() => {
      if (wish && this.wishesDataBase) {
        if (wish.price) wish.price = wish.price * 100;

        if (this.wishesDataBase.find((w) => w.id === wish.id)) {
          this.wishesDataBase = this.wishesDataBase.map((w) =>
            w.id === wish.id ? (w = wish) : w
          );
        } else {
          // Set id
          if (this.wishesDataBase)
            wish.id =
              this.wishesDataBase[this.wishesDataBase.length - 1].id + 1;
          wish.userId = this.user.login;
          wish.assignedTo = [];
          wish.status = 0;

          this.wishesDataBase.push(wish);
        }
        this.getUserWishes();
        this.getWishes();
      }
    }, 1000);
  }

  deleteWish(wishId: number) {
    this.wishesDataBase = this.wishesDataBase.filter((w) => w.id !== wishId);

    this.getUserWishes();
    this.getWishes();
  }

  assignUser(wishId: number, amount: number) {
    if (this.user) {
      let wish = this.wishes.find((w) => w.id === wishId);
      if (wish && amount > 0) {
        let userAssigned = wish.assignedTo.find(
          (assign) =>
            assign.user.toLowerCase() === this.user.login.toLowerCase()
        );
        if (userAssigned) {
          wish.status -= userAssigned.value;
          wish.status += amount;
          userAssigned.value = amount;
        } else {
          wish.status += amount;
          wish.assignedTo.push({ user: this.user.login, value: amount });
        }
        this.wishesSubject.next([...this.wishes]);
      }
    }
  }

  unassignUser(wishId: number) {
    let wish = this.wishes.find((wish) => wish.id === wishId);
    if (wish) {
      let assign = wish.assignedTo.find(
        (assinger) =>
          assinger.user.toLowerCase() === this.user.login.toLowerCase()
      );
      if (assign) {
        wish.status -= assign.value;
        wish.assignedTo = wish.assignedTo.filter(
          (assigner) => assigner !== assign
        );
        this.wishesSubject.next(this.wishes);
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
