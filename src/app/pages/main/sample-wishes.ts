import Wish from 'src/app/models/wish';

export const SampleWishes: Wish[] = [
  {
    id: 1,
    name: 'Travel to the USA',
    price: 500000,
    description: 'I have always dreamed of traveling to America.',
    userId: 'johnsample',
  },
  {
    id: 2,
    name: 'Green Tea',
    price: 1000,
    description: 'I love green tea! I will accept any quantity :D',
    userId: 'anna',
    imageUrl:
      'https://pl.menu.town/storage/media/dishes_main/2286529/green-tea.jpg',
  },
  {
    id: 3,
    name: 'Candles',
    price: 10000,
    description:
      'I like candles with a citrus scent. It is best if they will be soy, but I will not disdain others as well. I like the Sand + Fog company.',
    userId: 'maggie',
    imageUrl:
      'https://a.allegroimg.com/original/11a32f/b730fb444e6196cccb28a3cdf9fb/Sand-and-fog-sojowa-swieca-Tahitian-Vanilla',
  },
  {
    id: 4,
    name: 'Mister Ron',
    description: 'My favourite candy.',
    userId: 'adam1234',
    imageUrl:
      'https://wartokupic.co/wp-content/uploads/2016/05/cukierki-mister-ron-smietanka-truskawka.jpg',
  },
  {
    id: 5,
    name: 'Mouse',
    price: 10000,
    description: 'My current mouse is breaking down. I use wireless mouses.',
    userId: 'g@mer',
    imageUrl:
      'https://www.ubuy.com.pl/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvZmU0N2E0YWItNWVjYy00MTRmLWFlNDktNmM3YTI2NjllMTFiXzEuNDI0ODllZjBlMzMxYzk3ZjUyNTJkN2ZjMjExMzAzYTEuanBlZw.jpg',
  },
  {
    id: 6,
    name: 'Harry Potter, tom 3',
    description: 'I lost 1 of of my 7 books. I need exact this release.',
    userId: 'reader',
    imageUrl:
      'https://multiszop.pl/Photos/9/LARGE/000044/harry-potter-3-wiezien-azbakanu-audio-cd-mp3-audiobook.jpg',
  },
  {
    id: 7,
    name: 'Xbox',
    price: 140000,
    description:
      'My son wants it for his birthday. I bought him something else that he wants.',
    userId: 'parent',
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_22_9_32_42_104_00.jpg',
  },
];
