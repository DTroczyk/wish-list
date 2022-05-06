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
    wishes: [
      {
        id: 1,
        name: 'Bike',
        userId: 'DTroczyk',
        price: 269999,
        description: 'I want a bike for the city and the forest',
        imageUrl:
          'https://www.greenbike.pl/images/level_2_0_black_blue_white_egloss.png.jpg',
      },
      {
        id: 2,
        name: 'Motorbike 125cm',
        userId: 'DTroczyk',
        price: 599999,
        description: 'Motorbike is good for cities.',
        imageUrl:
          'https://www.autocentrum.pl/ac-file/article/5892c61c582c7da1b2909bb7/honda-cbr-125-r-scigacz-w-miniaturze-07.jpg',
      },
      {
        id: 3,
        name: 'DJI Spark',
        userId: 'DTroczyk',
        price: 150000,
        description: 'DJI Spark is like a flying tank. Good for beginners.',
        imageUrl:
          'https://www.cnet.com/a/img/resize/668d2aca568ea89f72001ef46c323c4f62098ac0/hub/2017/07/14/057fc4a6-5f1b-404b-928f-d91c83e8cf92/dji-spark-0013.jpg?auto=webp&width=768',
      },
      {
        id: 4,
        name: 'Raspberry',
        userId: 'DTroczyk',
        price: 29999,
        description: 'Raspberry for my projects.',
        imageUrl:
          'https://cdn-reichelt.de/bilder/web/xxl_ws/A300/PI4_CASE1_255.png',
      },
    ],
    friends: ['janedoe', 'joedoe'],
    chats: [channels[0], channels[2]],
  },
  {
    login: 'joedoe',
    email: 'joedoe@wishlist.com',
    firstName: 'Joe',
    lastName: 'Doe',
    wishes: [
      {
        id: 5,
        name: 'Travel to the America',
        userId: 'joedoe',
        price: 500000,
        description: 'I never been in the USA',
      },
    ],
    friends: ['janedoe', 'dtroczyk'],
    chats: [channels[0], channels[1], channels[2]],
  },
  {
    login: 'janedoe',
    email: 'janedoe@wishlist.com',
    firstName: 'Jane',
    lastName: 'Doe',
    wishes: [
      {
        id: 6,
        name: 'Factorio',
        userId: 'janedoe',
        price: 500000,
        description: 'I want play Factorio',
        imageUrl:
          'https://cdn.cloudflare.steamstatic.com/steam/apps/427520/capsule_616x353.jpg?t=1620730652',
      },
    ],
    friends: ['dtroczyk', 'joedoe'],
    chats: [channels[1], channels[2]],
  },
];
