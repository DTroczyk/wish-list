import Chat, { LastAccess, Message } from '../models/chat';

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

export const lastAccesses: LastAccess[] = [
  { date: new Date(2022, 3, 28, 14, 13, 24), user: 'dtroczyk', chatId: 1 },
  { date: new Date(2022, 3, 28, 15, 3, 24), user: 'joedoe', chatId: 1 },
  { date: new Date(2022, 3, 28, 14, 13, 24), user: 'joedoe ', chatId: 2 },
  { date: new Date(2022, 3, 28, 15, 3, 24), user: 'janedoe', chatId: 2 },
  { date: new Date(2022, 3, 28, 14, 13, 24), user: 'dtroczyk', chatId: 3 },
];

export const channels: Chat[] = [
  {
    id: 1,
    name: 'Dominik, Joe',
    users: ['DTroczyk', 'joedoe'],
    messages: [],
    lastAccess: [],
  },
  {
    id: 2,
    name: 'Joe, Jane',
    users: ['joedoe', 'janedoe'],
    messages: [],
    lastAccess: [],
  },
  {
    id: 3,
    name: 'Dominik, Joe, Jane',
    users: ['DTroczyk', 'joedoe', 'janedoe'],
    messages: [],
    lastAccess: [],
  },
];
