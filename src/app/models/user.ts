export interface User {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface LoginUser {
  login: string;
  password: string;
}

export interface RegisterUser {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
