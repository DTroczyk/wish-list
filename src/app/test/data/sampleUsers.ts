import User from 'src/app/models/user';
import { SampleChats } from './sampleChats';

export const SampleUsers: User[] = [
  {
    login: 'user1',
    email: 'user1@wish.com',
    firstName: 'User',
    lastName: 'New',
    wishes: [],
    friends: ['user2'],
    chats: [SampleChats[0], SampleChats[1]],
  },
  {
    login: 'user2',
    email: 'user2@wish.com',
    firstName: 'User',
    lastName: 'New',
    wishes: [],
    friends: ['user1'],
    chats: [SampleChats[0], SampleChats[2]],
  },
  {
    login: 'user3',
    email: 'user3@wish.com',
    firstName: 'User',
    lastName: 'New',
    wishes: [],
    friends: [],
    chats: [SampleChats[1], SampleChats[2]],
  },
];
