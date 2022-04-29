import Chat, { Message } from './chat';
import User from './user';

export const messages: Message[] = [
  {
    chatId: 1,
    author: 'DTroczyk',
    postDate: new Date(2022, 3, 28, 14, 12, 24),
    text: 'Hello',
  },
  {
    chatId: 1,
    author: 'joedoe',
    postDate: new Date(2022, 3, 28, 15, 2, 24),
    text: 'Hello',
  },
  {
    chatId: 1,
    author: 'joedoe',
    postDate: new Date(2022, 3, 28, 15, 2, 24),
    text: 'Are you good?',
  },
  {
    chatId: 3,
    author: 'janedoe',
    postDate: new Date(2022, 3, 29, 9, 15, 24),
    text: 'Hello!',
  },
  {
    chatId: 2,
    author: '?unknown?',
    postDate: new Date(2022, 3, 29, 12, 45, 1),
    text: 'Hello!',
  },
  {
    chatId: 3,
    author: '?unknown?',
    postDate: new Date(2022, 3, 29, 12, 45, 1),
    text: 'Hello!',
  },
];

export const channels: Chat[] = [
  {
    id: 1,
    name: 'Dominik, Joe',
    users: ['DTroczyk', 'joedoe'],
    messages: messages.filter((mes) => mes.chatId === 1),
    lastAccess: [
      { date: new Date(2022, 3, 28, 14, 13, 24), user: 'dtroczyk', chatId: 1 },
      { date: new Date(2022, 3, 28, 15, 3, 24), user: 'joedoe', chatId: 1 },
    ],
  },
  {
    id: 2,
    name: 'Joe, Jane',
    users: ['joedoe', 'janedoe'],
    messages: messages.filter((mes) => mes.chatId === 2),
    lastAccess: [
      { date: new Date(2022, 3, 28, 14, 13, 24), user: 'joedoe ', chatId: 2 },
      { date: new Date(2022, 3, 28, 15, 3, 24), user: 'janedoe', chatId: 2 },
    ],
  },
  {
    id: 3,
    name: 'Dominik, Joe, Jane',
    users: ['DTroczyk', 'joedoe', 'janedoe'],
    messages: messages.filter((mes) => mes.chatId === 3),
    lastAccess: [
      { date: new Date(2022, 3, 28, 14, 13, 24), user: 'dtroczyk', chatId: 3 },
    ],
  },
];

export const users: User[] = [
  {
    login: 'DTroczyk',
    email: 'DTroczyk@wishlist.com',
    firstName: 'Dominik',
    lastName: 'Wish',
    wishes: [],
    friends: [],
    chats: [channels[0], channels[2]],
  },
  {
    login: 'joedoe',
    email: 'joedoe@wishlist.com',
    firstName: 'Joe',
    lastName: 'Doe',
    wishes: [],
    friends: [],
    chats: [channels[0], channels[1], channels[2]],
  },
  {
    login: 'janedoe',
    email: 'janedoe@wishlist.com',
    firstName: 'Jane',
    lastName: 'Doe',
    wishes: [],
    friends: [],
    chats: [channels[1], channels[2]],
  },
];
