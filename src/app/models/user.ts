import Chat from './chat';
import Wish from './wish';

export default interface User {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  wishes: Wish[];
  friends: string[];
  chats: Chat[];
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
