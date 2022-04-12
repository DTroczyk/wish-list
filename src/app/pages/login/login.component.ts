import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;

  user: LoginUser = {
    login: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  isInputsEmpty(): boolean {
    if (this.user.login === '' || this.user.login === null) return true;
    if (this.user.password === '' || this.user.password === null) return true;
    return false;
  }

  login() {
    if (this.userService.login(this.user.login, this.user.password)) {
      this.router.navigate(['/']);
    } else {
      alert('Wrong login or password.');
    }
  }
}
