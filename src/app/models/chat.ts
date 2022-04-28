export default interface Chat {
  id: number;
  name: string;
  users: string[];
  messages: Message[];
  lastAccess: LastAccess[];
}

export interface Message {
  chatId: number;
  author: string;
  postDate: Date;
  text: string;
}

export interface LastAccess {
  user: string;
  chatId: number;
  date: Date;
}
