import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/user';

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

  isInputsEmpty(): boolean {
    if (this.user.login === '' || this.user.login === null) return true;
    if (this.user.password === '' || this.user.password === null) return true;
    return false;
  }

  login() {
    alert(`Login user: ${this.user.login}, password: ${this.user.password}`);
  }
}
