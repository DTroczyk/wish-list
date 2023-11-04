import { Injectable, OnDestroy } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import User from '../models/user';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthGuard implements OnDestroy {
  private user: User = null as any;
  private sub;

  constructor(private router: Router, private userService: UserService) {
    this.sub = userService.userSubject.subscribe((res) => {
      if (res.user) this.user = res.user;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
}
