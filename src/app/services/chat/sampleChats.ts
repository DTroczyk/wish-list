import Chat from '../../models/chat';

export const SampleChats: Chat[] = [
  {
    id: 1,
    name: 'Chat 1',
    users: ['user1', 'user2'],
    messages: [
      {
        chatId: 1,
        author: 'user2',
        postDate: new Date(2022, 5, 5, 15, 33, 24),
        text: 'Hello',
      },
    ],
    lastAccess: [
      { user: 'user2', date: new Date(2022, 5, 5, 15, 33, 24), chatId: 1 },
    ],
  },
  {
    id: 2,
    name: 'Chat 2',
    users: ['user1', 'user3'],
    messages: [
      {
        chatId: 2,
        author: 'user1',
        postDate: new Date(2022, 5, 5, 15, 37, 24),
        text: 'Hello',
      },
      {
        chatId: 2,
        author: 'user3',
        postDate: new Date(2022, 5, 5, 15, 38, 24),
        text: 'Hello :D',
      },
    ],
    lastAccess: [
      { user: 'user1', date: new Date(2022, 5, 5, 15, 37, 24), chatId: 2 },
      { user: 'user3', date: new Date(2022, 5, 5, 15, 38, 24), chatId: 2 },
    ],
  },
];
