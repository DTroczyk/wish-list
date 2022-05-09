import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { users } from 'src/app/models/temp-data';
import User, { PublicUser } from 'src/app/models/user';
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

  private _user!: User | null;
  private subs: Subscription = new Subscription();
  private userApi: User[] = users;

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

  login(username: string, password: string) {
    setTimeout(() => {
      this._user = this.userApi.find(
        (user) => user.login.toLowerCase() === username.toLowerCase()
      ) as User | null;

      if (this._user) {
        // Set the logged in user wishes
        this.wishService.setWishes([...this._user.wishes]);
        // Set logged user
        this.userSubject.next({
          user: { ...this._user },
          status: STATUS_CODE.SUCCES,
        });
        // Set friends
        this.friendsSubject.next([
          ...this.userApi.filter((user) =>
            user.friends.find(
              (friend) =>
                friend.toLowerCase() === this._user?.login.toLowerCase()
            )
          ),
        ]);
        return true;
      }
      this._user = null;

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
}

export interface UserResponse {
  user: User;
  status: STATUS_CODE;
}
