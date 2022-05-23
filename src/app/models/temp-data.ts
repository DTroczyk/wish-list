import Chat, { Message } from './chat';
import User from './user';
import Wish from './wish';

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

export const wishes: Wish[] = [
  {
    id: 1,
    name: 'Bike',
    userId: 'DTroczyk',
    price: 269999,
    description: 'I want a bike for the city and the forest',
    imageUrl:
      'https://www.greenbike.pl/images/level_2_0_black_blue_white_egloss.png.jpg',
    assignedTo: [],
    status: 0,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Motorbike 125cm',
    userId: 'DTroczyk',
    price: 599999,
    description: 'Motorbike is good for cities.',
    imageUrl:
      'https://www.autocentrum.pl/ac-file/article/5892c61c582c7da1b2909bb7/honda-cbr-125-r-scigacz-w-miniaturze-07.jpg',
    assignedTo: [],
    status: 0,
    quantity: 1,
  },
  {
    id: 3,
    name: 'DJI Spark',
    userId: 'DTroczyk',
    price: 150000,
    description: 'DJI Spark is like a flying tank. Good for beginners.',
    imageUrl:
      'https://www.cnet.com/a/img/resize/668d2aca568ea89f72001ef46c323c4f62098ac0/hub/2017/07/14/057fc4a6-5f1b-404b-928f-d91c83e8cf92/dji-spark-0013.jpg?auto=webp&width=768',
    assignedTo: [],
    status: 0,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Raspberry',
    userId: 'DTroczyk',
    price: 29999,
    description: 'Raspberry for my projects.',
    imageUrl:
      'https://cdn-reichelt.de/bilder/web/xxl_ws/A300/PI4_CASE1_255.png',
    assignedTo: [],
    status: 0,
    quantity: 1,
  },
  {
    id: 5,
    name: 'Travel to the America',
    userId: 'joedoe',
    price: 500000,
    description: 'I never been in the USA',
    assignedTo: [],
    status: 0,
    quantity: 1,
  },
  {
    id: 6,
    name: 'Factorio',
    userId: 'janedoe',
    price: 7000,
    description: 'I want play Factorio',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/427520/capsule_616x353.jpg?t=1620730652',
    assignedTo: [],
    status: 0,
    quantity: 1,
  },
  {
    id: 7,
    name: 'Scooter',
    userId: 'shaanferguson',
    price: 200000,
    description: 'I need this to commute to work.',
    imageUrl:
      'https://hndelectric.pl/wp-content/uploads/2021/03/IMG_8613-600x600.jpg',
    assignedTo: [],
    status: 0,
    quantity: 1,
  },
  {
    id: 8,
    name: 'Couch playing',
    userId: 'janedoe',
    description:
      "I'm looking for a player for play in 'Don't Starve Together'.",
    imageUrl: 'https://www.gry-online.pl/Galeria/Html/Artykuly/439661093.jpg',
    assignedTo: [],
    status: 0,
    quantity: 3,
  },
  {
    id: 9,
    name: 'Office chair',
    userId: 'leianeale',
    description: '',
    assignedTo: [
      {
        user: 'joedoe',
        value: 2000,
      },
    ],
    price: 20000,
    status: 2000,
    quantity: 1,
    visibility: true,
  },
  {
    id: 10,
    name: 'Orchid',
    userId: 'janedoe',
    description: '',
    imageUrl:
      'https://i.iplsc.com/kwitnacy-storczyk/000ATCZYVJ51QN17-C122-F4.jpg',
    assignedTo: [],
    price: 5000,
    status: 0,
    quantity: 1,
    visibility: true,
  },
];

export const users: User[] = [
  {
    login: 'DTroczyk',
    email: 'DTroczyk@wishlist.com',
    firstName: 'Dominik',
    lastName: 'Wish',
    wishes: wishes.filter((w) => w.userId.toLowerCase() === 'dtroczyk'),
    friends: ['janedoe', 'joedoe', 'leianeale'],
    chats: [channels[0], channels[2]],
  },
  {
    login: 'joedoe',
    email: 'joedoe@wishlist.com',
    firstName: 'Joe',
    lastName: 'Doe',
    wishes: wishes.filter((w) => w.userId.toLowerCase() === 'joedoe'),
    friends: ['janedoe', 'dtroczyk', 'shaanferguson'],
    chats: [channels[0], channels[1], channels[2]],
  },
  {
    login: 'janedoe',
    email: 'janedoe@wishlist.com',
    firstName: 'Jane',
    lastName: 'Doe',
    wishes: wishes.filter((w) => w.userId.toLowerCase() === 'janedoe'),
    friends: ['dtroczyk', 'joedoe'],
    chats: [channels[1], channels[2]],
  },
  {
    login: 'shaanferguson',
    email: 'sfergus@wishlist.com',
    firstName: 'Shaan',
    lastName: 'Ferguson',
    wishes: wishes.filter((w) => w.userId.toLowerCase() === 'shaanferguson'),
    friends: ['joedoe'],
    chats: [],
  },
  {
    login: 'leianeale',
    email: 'leianeale@wishlist.com',
    firstName: 'Leia',
    lastName: 'Neale',
    wishes: wishes.filter((w) => w.userId.toLowerCase() === 'leianeale'),
    friends: ['dtroczyk'],
    chats: [],
  },
];
