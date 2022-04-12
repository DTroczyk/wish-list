import { Component } from '@angular/core';
import { RegisterUser } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide: boolean = true;

  user: RegisterUser = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  isInputsWrong(): Boolean {
    var result: boolean = false;

    return result;
  }

  register() {
    alert(
      `Register \n` +
        `Username: ${this.user.login} \n` +
        `Email: ${this.user.email} \n` +
        `First name: ${this.user.firstName} \n` +
        `Last name: ${this.user.lastName} \n` +
        `Password: ${this.user.password}`
    );
  }
}
