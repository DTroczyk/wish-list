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
export class UserService {
  public userSubject: BehaviorSubject<UserResponse> =
    new BehaviorSubject<UserResponse>({
      user: null as any,
      status: STATUS_CODE.NOT_SEND,
    });
  public friendsSubject = new BehaviorSubject<PublicUser[]>([]);
  public get getLoggedUser() {
    return { ...this.user };
  }

  private user!: User | null;
  private userApi: User[] = users;

  login(username: string, password: string) {
    setTimeout(() => {
      this.user = this.userApi.find(
        (user) => user.login.toLowerCase() === username.toLowerCase()
      ) as User | null;

      if (this.user) {
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
}

export interface UserResponse {
  user: User;
  status: STATUS_CODE;
}
