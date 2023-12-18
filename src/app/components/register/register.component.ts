import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide: boolean = true;

  public registerUserForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  public getErrorMessage(
    field:
      | 'login'
      | 'email'
      | 'firstName'
      | 'lastName'
      | 'password'
      | 'repeatPassword'
  ): string {
    if (this.registerUserForm.controls[field].hasError('required')) {
      return `Field ${field} is required.`;
    } else {
      return '';
    }
  }

  // // Validation method to remove
  // isInputsWrong(): Boolean {
  //   var isWrong: boolean = false;
  //   this.error = this.clearErrors();

  //   if (this.user.login === '' || this.user.login === null) {
  //     isWrong = true;
  //     this.error.login = 'Field username is required.';
  //   }

  //   if (this.user.email === '' || this.user.email === null) {
  //     isWrong = true;
  //     this.error.email = 'Field email is required.';
  //   } else if (
  //     !this.user.email
  //       .toLowerCase()
  //       .match(
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       )
  //   ) {
  //     isWrong = true;
  //     this.error.email = 'Email is invalid';
  //   }

  //   if (this.user.firstName === '' || this.user.firstName === null) {
  //     isWrong = true;
  //     this.error.firstName = 'Field first name is required.';
  //   }

  //   if (this.user.lastName === '' || this.user.lastName === null) {
  //     isWrong = true;
  //     this.error.lastName = 'Field last name is required.';
  //   }

  //   if (this.user.password === '' || this.user.password === null) {
  //     isWrong = true;
  //     this.error.password = 'Field password is required.';
  //   } else if (
  //     !this.user.password.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,}$/)
  //   ) {
  //     isWrong = true;
  //     this.error.password =
  //       'Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter and one number.';
  //   }

  //   if (this.user.password !== this.repPassword) {
  //     isWrong = true;
  //     this.error.repPassword =
  //       'The field password and the field repeat password must be the same.';
  //   }

  //   return isWrong;
  // }

  public register() {
    if (this.registerUserForm.valid) {
      console.log('Valid form');
    }
  }
}
