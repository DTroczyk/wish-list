import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginUser } from 'src/app/models/user';
import { STATUS_CODE } from 'src/app/services/user/status-code';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public hide: boolean = true;
  public loginStatus: STATUS_CODE;
  public user: LoginUser = {
    login: '',
    password: '',
  };
  public isToastVisible: boolean = false;

  private subs: Subscription = new Subscription();

  constructor(private userService: UserService, private router: Router) {
    this.loginStatus = STATUS_CODE.NOT_SEND;
    this.subs.add(
      userService.userSubject.subscribe((res) => {
        this.loginStatus = res.status;
        if (res.status === STATUS_CODE.SUCCES) {
          this.router.navigate(['/']);
        } else if (res.status === STATUS_CODE.REJECTED) {
          this.isToastVisible = true;
          setTimeout(() => (this.isToastVisible = false), 5000);
        } else if (res.status === STATUS_CODE.FAILED) {
          console.error('Something went wrong.');
        }
      })
    );
  }

  isInputsEmpty(): boolean {
    if (this.user.login === '' || this.user.login === null) return true;
    if (this.user.password === '' || this.user.password === null) return true;
    return false;
  }

  login() {
    this.userService.login(this.user.login, this.user.password);
    this.loginStatus = STATUS_CODE.PENDING;
  }
}
