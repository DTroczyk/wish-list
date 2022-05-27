import User from '../models/user';

export const users: User[] = [
  {
    login: 'DTroczyk',
    email: 'DTroczyk@wishlist.com',
    firstName: 'Dominik',
    lastName: 'Wish',
    wishes: [],
    friends: ['janedoe', 'joedoe', 'leianeale'],
    chats: [],
  },
  {
    login: 'joedoe',
    email: 'joedoe@wishlist.com',
    firstName: 'Joe',
    lastName: 'Doe',
    wishes: [],
    friends: ['janedoe', 'dtroczyk', 'shaanferguson'],
    chats: [],
  },
  {
    login: 'janedoe',
    email: 'janedoe@wishlist.com',
    firstName: 'Jane',
    lastName: 'Doe',
    wishes: [],
    friends: ['dtroczyk', 'joedoe'],
    chats: [],
  },
  {
    login: 'shaanferguson',
    email: 'sfergus@wishlist.com',
    firstName: 'Shaan',
    lastName: 'Ferguson',
    wishes: [],
    friends: ['joedoe'],
    chats: [],
  },
  {
    login: 'leianeale',
    email: 'leianeale@wishlist.com',
    firstName: 'Leia',
    lastName: 'Neale',
    wishes: [],
    friends: ['dtroczyk'],
    chats: [],
  },
];
