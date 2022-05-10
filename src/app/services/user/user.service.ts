import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { users } from 'src/app/models/temp-data';
import User, { PublicUser } from 'src/app/models/user';
import Wish from 'src/app/models/wish';
import { WishService } from '../wish/wish.service';
import { STATUS_CODE } from './status-code';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy, OnInit {
  public userSubject: BehaviorSubject<UserResponse> =
    new BehaviorSubject<UserResponse>({
      user: null as any,
      status: STATUS_CODE.NOT_SEND,
    });
  public friendsSubject = new BehaviorSubject<PublicUser[]>([]);

  private user!: User | null;
  private subs: Subscription = new Subscription();
  private userApi: User[] = users;

  constructor(private wishService: WishService) {}

  ngOnInit(): void {
    this.subs.add(
      this.wishService.wishesSubject.subscribe((res) => {
        if (this.user) this.user.wishes = res;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  login(username: string, password: string) {
    setTimeout(() => {
      this.user = this.userApi.find(
        (user) => user.login.toLowerCase() === username.toLowerCase()
      ) as User | null;

      if (this.user) {
        // Set the logged in user wishes
        this.wishService.setWishes([...this.user.wishes]);
        // Set logged user
        this.userSubject.next({
          user: { ...this.user },
          status: STATUS_CODE.SUCCES,
        });
        // Set friends
        this.friendsSubject.next([
          ...this.userApi.filter((user) =>
            user.friends.find(
              (friend) =>
                friend.toLowerCase() === this.user?.login.toLowerCase()
            )
          ),
        ]);
        return true;
      }
      this.user = null;

      this.userSubject.next({
        user: null as any,
        status: STATUS_CODE.REJECTED,
      });
      return false;
    }, 500);
  }

  logout() {
    this.userSubject.next({ user: null as any, status: STATUS_CODE.NOT_SEND });
  }

  getUserFriends(login: string): string[] {
    let user = this.userApi.find(
      (user) => user.login.toLowerCase() === login.toLowerCase()
    ) as User;
    if (user) {
      return user.friends;
    } else {
      return [];
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
      let userFriends = this.getUserFriends(item.userId);
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

export interface UserResponse {
  user: User;
  status: STATUS_CODE;
}
