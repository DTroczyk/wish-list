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
    visibility: ['joedoe', 'janedoe'],
    isMaxOne: false,
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
    visibility: [],
    isMaxOne: false,
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
    visibility: [],
    isMaxOne: false,
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
    isMaxOne: false,
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
    isMaxOne: false,
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
    deadline: new Date(new Date().setDate(new Date().getDate() + 8)),
    isMaxOne: false,
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
    isMaxOne: false,
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
    deadline: new Date(new Date().setDate(new Date().getDate() + 3)),
    isMaxOne: true,
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
    isMaxOne: false,
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
    isMaxOne: false,
  },
  {
    imageUrl:
      'https://sklep.rakon.com.pl/raciborz/1425-large_default/goralki-wafelki-rozne-smaki-50g.jpg',
    id: 11,
    name: 'Text check',
    userId: 'janedoe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur elit id posuere scelerisque. Vestibulum consequat, orci sit amet gravida consequat, metus urna porttitor risus, ac facilisis eros elit ac neque. Cras turpis mauris, porttitor eget volutpat id, varius quis arcu. Nulla dapibus facilisis metus at vulputate. Suspendisse commodo dolor pellentesque nisl condimentum vestibulum. Donec pharetra erat in ante aliquam euismod. Proin in convallis eros, et maximus elit. Quisque nec est erat. Proin at fermentum elit, id laoreet augue. Nullam orci lacus, blandit in vestibulum at, volutpat vitae lorem. Suspendisse potenti. Donec non placerat tortor. Duis interdum velit arcu, commodo egestas ex cursus vel. Donec eu lacus quis justo rhoncus accumsan. Proin convallis fringilla tincidunt. Pellentesque eget justo nec arcu sodales suscipit. Nullam vel pharetra nibh. Curabitur tristique ipsum eu nisl ultricies, et tristique nunc porttitor. Pellentesque facilisis, nunc sed convallis scelerisque, tellus nulla egestas metus, vitae cursus ligula ipsum id turpis. Sed commodo ligula non feugiat faucibus. Praesent consequat leo pulvinar est accumsan, eget laoreet massa feugiat. Aliquam eget congue est, non imperdiet nulla. Nullam pharetra, felis sed dictum commodo, tellus felis sollicitudin turpis, sed interdum elit tortor a purus. Sed at dictum lorem. Donec sed venenatis libero. Nulla gravida ullamcorper aliquet. Praesent rhoncus venenatis elit vitae facilisis. Aliquam in vulputate est. Curabitur dictum lacus vitae hendrerit tristique. Suspendisse scelerisque enim ut diam blandit rutrum. Sed dictum dapibus varius. Praesent malesuada enim ac placerat tempus. Donec tempor feugiat ante. Sed et pretium dolor. Vivamus quis erat tristique, viverra risus vel, pharetra sem. Praesent in rhoncus lectus. Mauris et iaculis magna. Praesent fringilla, sapien sit amet consectetur porta, nibh sem porttitor purus, eget finibus libero lorem sit amet neque. Aenean aliquam mi at convallis consequat. Vestibulum nisl diam, vehicula id semper vitae, consequat sed nisi. Integer facilisis justo eget felis posuere, congue viverra velit blandit. Praesent volutpat arcu arcu, quis dapibus augue tempus eu. Vivamus dignissim, metus non eleifend tincidunt, quam nisi lobortis nulla, vel iaculis purus sapien eget augue. Aliquam tempor mi ac blandit tempus. Nulla fermentum tincidunt tincidunt. Donec eu dui condimentum, auctor nibh in, volutpat augue. Etiam a pharetra erat. Sed rhoncus nunc sapien, id molestie urna mollis sagittis. Aliquam vel urna feugiat, tempus enim a, molestie purus. Curabitur accumsan congue nisi sit amet facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pretium rutrum enim vitae venenatis. Proin eget tristique orci. Curabitur tristique nulla in velit luctus fermentum vitae sodales leo. Suspendisse dictum est ac lobortis mollis. Suspendisse quis fermentum quam. Nulla ac sollicitudin nulla, vitae pharetra leo. In consequat egestas eleifend. Pellentesque ut ipsum dui. Sed tempus aliquet lorem, ac porta sapien gravida a. Maecenas non magna eget augue tincidunt tristique. Donec accumsan leo vel tincidunt commodo. Etiam sit amet hendrerit nunc. Quisque facilisis volutpat tincidunt. Sed tempus consequat mauris, id varius lorem tempor vel. Quisque vulputate sem vel felis auctor, ac suscipit nulla interdum. Sed feugiat augue quis auctor euismod. Mauris sagittis pharetra elit luctus aliquam. In id pellentesque elit. Sed ornare, metus eu fermentum viverra, lectus nisi tempor urna, lacinia elementum nunc risus eu enim. Vivamus felis massa, accumsan id tellus vitae, blandit lacinia ante. Duis mollis dolor et semper interdum. Etiam et leo eros. Etiam condimentum, velit a dignissim tempus, mauris massa molestie tortor, eget laoreet leo tellus non lectus. Nulla accumsan ligula placerat, condimentum neque vitae, aliquet lorem. Aliquam malesuada, ipsum quis consequat varius, sapien est consectetur leo, eget eleifend orci nisi a quam. Sed vehicula mattis dolor nec luctus. Nunc nec pretium velit, ac blandit ligula. Nunc imperdiet dignissim metus, quis cursus sem condimentum ut. Duis imperdiet tincidunt ligula, vel mollis leo feugiat ut. In pellentesque pulvinar turpis quis tincidunt. Nunc nec aliquam odio, a varius dolor. Ut at ligula pretium, feugiat nisl ut, malesuada mi. Donec imperdiet elit sed iaculis aliquet. Nullam rhoncus felis non nulla pharetra, eu ornare magna dignissim. Curabitur convallis condimentum mi at maximus. Curabitur suscipit est malesuada feugiat imperdiet. Suspendisse fringilla mollis erat vel porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, arcu non vulputate dignissim, mi velit gravida tortor, suscipit faucibus lacus sapien at neque. Morbi sem sem, finibus eu congue ut, condimentum et lorem. Donec suscipit lacinia tellus, quis sodales lectus hendrerit eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis consequat sapien nec efficitur. Etiam congue finibus faucibus. Duis sodales velit at augue bibendum placerat. Suspendisse potenti. Ut mollis, erat et mollis aliquam, lectus sem bibendum eros, eget sagittis magna enim eleifend turpis. Donec sollicitudin sapien dui, at rutrum nulla feugiat at. In sit amet diam felis. Praesent mollis tortor id arcu iaculis fringilla. Donec interdum efficitur arcu a luctus. Ut ut volutpat elit. Aenean enim diam, dignissim sit amet iaculis quis, eleifend non magna. Nullam sagittis egestas eros, vulputate ultrices odio ultricies et. Duis sollicitudin viverra pharetra. Nulla ullamcorper faucibus aliquam. Mauris fermentum quis ligula eget mattis. Quisque volutpat urna massa, at varius libero fringilla sit amet. Fusce feugiat massa id lorem tincidunt tempor. Etiam at augue quam. Vivamus iaculis condimentum libero tincidunt consequat. Suspendisse ac sem sollicitudin libero scelerisque elementum in varius turpis. Cras massa ex, tristique eget nibh a, elementum imperdiet augue. Pellentesque ex justo, vestibulum in quam consequat, vestibulum pretium sem. Nam et fermentum erat. Vivamus pharetra augue sapien, eu elementum nisl euismod ac. Aliquam pharetra auctor dui in gravida. Morbi eleifend, augue eu tincidunt consectetur, ligula ligula molestie sapien, quis scelerisque arcu urna quis augue. Maecenas ante quam, cursus at augue non, fringilla dapibus sem. Quisque a nibh sed ipsum lobortis vulputate vitae non est. Maecenas urna neque, sodales a massa quis, auctor accumsan augue. Duis sollicitudin euismod lectus at consequat. Donec ut aliquam justo. Integer mauris purus, auctor vitae viverra tristique, interdum at purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, erat in suscipit molestie, ipsum sapien vulputate odio, id laoreet odio eros a elit. Nam bibendum porttitor ultricies. Integer vestibulum, metus et condimentum scelerisque, tellus felis pellentesque quam, at pulvinar velit purus porta elit. Aliquam nisl nibh, tincidunt at sem sit amet, ullamcorper molestie felis. Mauris mauris augue, tempor a risus sit amet, consectetur tempus nisi. Aliquam erat volutpat. Nulla malesuada, sem eget tempor ultrices, nisi risus sagittis felis, nec ornare nisl sapien sit amet nulla. Sed aliquet turpis in nisi congue fermentum a at nunc. Nunc nec vulputate enim, non consectetur tortor. Vestibulum ultricies ac felis a dignissim. In ante lacus, convallis a lectus ac, ultricies faucibus sem. Nulla interdum ligula est, sit amet vulputate mi malesuada eget. Donec libero felis, hendrerit quis nunc id, tristique viverra mauris. Mauris dictum, mi eget pharetra vulputate, velit nibh accumsan augue, maximus semper neque augue nec urna. Aliquam id vulputate lectus, id faucibus est. Integer vitae magna congue, cursus augue nec, egestas lectus. Etiam lacinia est eu arcu rhoncus, eget commodo sapien malesuada. Aliquam pharetra nisi elit, rutrum tristique nulla consequat mattis. Maecenas mattis cursus dapibus. Sed et nisl hendrerit, viverra nulla id, auctor nunc. Cras ut nibh non erat malesuada hendrerit. Curabitur tempus, eros nec sodales dictum, eros eros condimentum lacus, in luctus magna eros sit amet neque. In dictum eros ut justo scelerisque lacinia varius et ligula. Nulla vel nibh dapibus, lacinia sapien ac, accumsan magna. Phasellus felis nisi, auctor sed erat eget, venenatis sodales sapien. Nam sem mi, euismod quis lectus sit amet, elementum mollis metus. Etiam malesuada dui at nisi vulputate, eu porttitor ipsum viverra. Integer sit amet orci interdum sapien auctor porttitor. Nam sed justo odio. Donec condimentum, nisi luctus finibus pulvinar, leo urna finibus est, et convallis lectus ex et ipsum. Nullam id enim mattis, blandit nunc sit amet, bibendum magna. Nunc sed cursus sem, vitae sodales nulla. Duis aliquam ex et lacus sodales laoreet. Nullam molestie, quam in malesuada tempor, tellus leo eleifend turpis, non dignissim nibh arcu maximus leo. Nunc tempor nibh eu quam tincidunt rutrum. Maecenas sodales orci at malesuada mattis. Donec tempor varius commodo. Etiam luctus sed risus vitae sagittis. Fusce aliquet porta sem, non faucibus neque tincidunt quis. Phasellus non mi a augue pretium finibus. Suspendisse potenti. Donec finibus sollicitudin condimentum. Proin eu turpis leo. Suspendisse vel congue elit, non ornare nulla. Etiam elementum lorem eu sodales dictum. Etiam suscipit tellus eget ultrices suscipit. Nulla ac tempus nunc, nec tempor dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed vulputate erat. Pellentesque sed mi vitae nisi ultricies consectetur venenatis ac risus. Nulla molestie molestie ante in elementum. Nunc et condimentum nulla, sit amet volutpat ante. Aliquam eu finibus quam. Etiam ullamcorper, libero eget sodales lacinia, mauris justo tempus nisi, eu sollicitudin libero erat tempor sapien. Nullam et ligula tincidunt, condimentum arcu id, pretium ex. Nulla ullamcorper neque at efficitur laoreet. Aliquam erat volutpat. Quisque ornare commodo tincidunt. Aliquam et purus vel felis varius vehicula. Curabitur consequat aliquam euismod. Quisque pellentesque augue non sagittis pharetra. Sed a enim sed ex cursus pellentesque vitae sit amet dui. Ut maximus ornare dui, non sodales sapien iaculis eleifend. Donec viverra magna eget diam fermentum pulvinar. Nunc pulvinar vitae orci sed gravida. Quisque dictum leo ut elementum sollicitudin. Donec finibus turpis lectus, accumsan porttitor neque rhoncus sit amet. Curabitur pretium malesuada est, quis commodo augue ultrices ac. Cras imperdiet purus vitae est vehicula, vel pulvinar augue ullamcorper. Phasellus tellus lacus, elementum quis iaculis eget, lacinia quis tellus. Pellentesque sodales eu nunc nec porttitor. Donec luctus mauris sit amet cursus tempor. Duis eros nisi, hendrerit sed nulla sit amet, suscipit ornare mauris. Quisque porttitor scelerisque nisl et porta. Donec interdum tristique erat, nec viverra odio blandit sed. Nunc sit amet accumsan tellus. In non molestie nisi, quis laoreet nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tempor ipsum eget lorem efficitur fringilla. Vestibulum turpis lorem, iaculis id volutpat nec, dictum malesuada leo. Praesent quis enim nunc. Praesent in risus sed odio viverra tristique vitae quis velit. Praesent nisi mauris, sodales eu quam nec, maximus auctor ipsum. Praesent ut tincidunt mauris. Proin a faucibus elit. Quisque ornare sollicitudin lacus, quis accumsan nunc gravida et. Fusce quis quam luctus, aliquet tortor eget, fringilla ante. Vestibulum lacinia neque sed odio accumsan accumsan. Praesent malesuada nec mauris sit amet laoreet. Mauris eget pretium tortor. Sed eget tincidunt ligula. Vestibulum rhoncus enim porta est pellentesque vestibulum. Proin a ipsum semper, fermentum risus eu, suscipit nisl. Praesent congue rhoncus enim, eu malesuada nisi elementum non. Nunc at placerat mauris. Suspendisse commodo ipsum turpis, mattis ultrices nisi fringilla id. Ut ut est et odio accumsan fermentum. Morbi iaculis est enim, ac aliquet diam posuere quis. Cras id quam a odio commodo lobortis vel ut eros. Vivamus auctor est tortor, at fermentum justo lacinia et. Vestibulum fringilla dapibus sem, a pellentesque ipsum pellentesque pharetra. Donec iaculis, ex et luctus tempor, nisl erat tristique orci, id fringilla turpis odio vel diam. Quisque ornare, ex id suscipit vehicula, est velit tincidunt risus, vel bibendum justo lorem nec est. Cras vitae tellus a mauris placerat accumsan. Duis blandit mauris ac volutpat venenatis. Integer condimentum urna a sagittis viverra. Vivamus et velit accumsan, finibus urna sed, venenatis felis. Integer eleifend bibendum nunc vel cursus. Fusce quis neque ac risus auctor sollicitudin. Aliquam tempus massa eget enim condimentum convallis. Etiam ut quam pulvinar, ullamcorper leo quis, volutpat nisi. In semper cursus metus, et varius erat pretium nec. In ac nisi non velit mattis vehicula. Nam tempus ullamcorper dapibus. Aenean finibus purus sit amet dolor fringilla, ut vestibulum dolor imperdiet. Quisque a lacus tempus, fermentum dui lacinia, venenatis mauris. Phasellus nec purus justo. Nulla facilisi. Aliquam eget metus ex. Cras sollicitudin sed risus vitae eleifend. Nulla facilisi. Donec in felis quis erat lobortis congue. Duis mollis sit amet dolor ut auctor. Aenean varius dignissim turpis, eu sodales purus interdum vel. Suspendisse non dapibus leo, vitae bibendum diam. Nulla nunc tellus, pulvinar nec ultricies quis, auctor convallis felis. Nulla facilisi. Cras in magna consectetur, vehicula mi quis, pellentesque odio. Praesent ac sagittis nisl. Aenean elementum, erat nec ornare tincidunt, elit turpis ornare quam, a convallis leo magna nec enim. Vivamus dictum velit non turpis placerat fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur non odio turpis. Aliquam dui enim, bibendum ut sodales et, congue ut est. Donec dapibus venenatis dui a facilisis. Nullam ex orci, lobortis vitae leo eu, tristique lacinia tellus. Phasellus at nibh dui. Nulla dolor elit, pulvinar et rhoncus et, ultrices at augue. Aenean posuere id risus non dignissim. Cras laoreet metus massa, vel pulvinar ex lacinia eget. Sed a nibh elit. Aliquam a porttitor lacus. Nulla sit amet ipsum a sapien varius consectetur vitae vitae metus. Ut venenatis eros elementum mauris suscipit efficitur. Praesent tincidunt et nulla nec condimentum. Quisque malesuada rutrum erat nec semper. Aliquam vel tortor nibh. Cras tristique sollicitudin blandit. In iaculis consequat risus, non dignissim nulla rhoncus a. Quisque et nunc ac nisi sollicitudin malesuada a a elit. In hac habitasse platea dictumst. Pellentesque a arcu id mi porta faucibus. Integer pellentesque eu purus in fringilla. Integer eros purus, vehicula vitae turpis vitae, iaculis faucibus magna. Nam fermentum metus et egestas sodales. Suspendisse fermentum est cursus dui vestibulum aliquam. Etiam lacinia lobortis condimentum. Phasellus convallis mauris et leo malesuada, vel suscipit metus fringilla. Aenean pharetra dapibus bibendum. Cras convallis lacinia quam, nec pulvinar turpis lacinia et. Integer placerat sem quis urna blandit viverra. Sed tempor, elit eu accumsan pharetra, diam neque interdum purus, id lobortis augue nulla sit amet urna. Proin dictum, est et dignissim interdum, ex odio maximus nisi, quis vehicula est est non justo. Ut sed mi eu leo congue ultrices. Mauris mattis malesuada turpis eget consequat. Ut eget odio quis arcu efficitur euismod. Nam suscipit dignissim varius. Ut ornare vitae turpis vel imperdiet. Nulla lacus risus, sodales vel dolor quis, congue auctor nunc. Donec sed viverra mi. Vivamus mauris tellus, scelerisque at neque id, rutrum porttitor eros. Sed facilisis leo et arcu interdum maximus. Donec ut mauris id quam dapibus porttitor non a tellus. Proin non dignissim felis. Mauris nec felis eu est sagittis fermentum ac ut lorem. Sed at elit nec augue eleifend maximus. Nunc eget eros in elit semper rhoncus at sit amet ipsum. Donec vel enim venenatis, imperdiet velit eget, consectetur tortor. Aliquam erat volutpat. Quisque et est ac magna dapibus dapibus ut eu neque. Suspendisse eu massa lorem. Curabitur et diam dignissim turpis venenatis iaculis. Cras volutpat odio at felis luctus ultrices. Sed accumsan ex sed pellentesque elementum. Maecenas quis nibh suscipit elit dignissim mattis. Phasellus maximus ex sed turpis volutpat, rutrum vestibulum sem bibendum. Proin egestas eu libero non sodales. Duis euismod risus mi, ac bibendum arcu congue sed. Vestibulum elementum in eros sed luctus. In quis dolor fringilla, vulputate turpis eu, consequat risus. Morbi pretium sed eros eget accumsan. Aliquam dictum odio tellus, eget tempor purus cursus ut. Donec tempor nunc sit amet mollis mattis. Aenean et leo at est venenatis pretium nec ut sapien. Phasellus at dui varius, iaculis ex ac, porttitor mauris. Phasellus rhoncus nulla et libero dictum, vitae laoreet libero suscipit. Proin blandit condimentum ullamcorper. Maecenas viverra eleifend blandit. Duis quis odio sapien. Donec sollicitudin facilisis neque, id luctus est malesuada non. Vestibulum lorem arcu, dignissim in congue sed, scelerisque et turpis. Vivamus sit amet quam fermentum, sodales neque sed, placerat ipsum. Maecenas mi mi, aliquam in dui quis, pulvinar blandit nisl. Etiam vel felis vitae dui volutpat viverra vitae eget quam. Aliquam erat volutpat. Maecenas magna lorem, porttitor ac neque ut, varius iaculis massa. Integer nec imperdiet dolor. Nunc eu nunc a ante ultricies suscipit eget gravida enim. Sed fermentum tellus tempus nisi molestie cursus. Nam suscipit hendrerit enim. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer venenatis in leo id suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla quis nisi placerat, egestas orci non, porttitor nunc. Nullam elit ex, tincidunt in tempor ut, blandit vitae felis. Nam in mattis neque, non commodo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ante sapien, id suscipit turpis mollis et. Aenean metus diam, vehicula eget sodales in, laoreet vitae sapien. Fusce ut vehicula dolor. Duis posuere metus sit amet porttitor luctus. Nulla commodo neque libero, nec hendrerit sem pulvinar in. Ut imperdiet pharetra mauris et laoreet. Aenean eget odio nec diam blandit dictum. Donec eu urna turpis. Morbi aliquet libero sit amet blandit porttitor. Morbi urna velit, facilisis a sapien sed, viverra convallis lorem. Quisque sed faucibus nisi, et accumsan nibh. Nunc volutpat turpis a bibendum ultrices. In blandit tellus vel nunc feugiat, ut fermentum magna fermentum. Fusce dapibus non dolor eget mollis. Cras fringilla nec risus non vehicula. Nam ultricies tristique nulla, et fringilla neque blandit ut. Etiam dictum eros turpis, in ornare ex rhoncus vel. Praesent vehicula auctor arcu, non imperdiet orci condimentum lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed ligula quis mi facilisis lobortis. Integer ipsum ipsum, pellentesque non mattis ac, ultricies a urna. Sed non ipsum aliquam lacus egestas blandit. Donec porttitor purus purus, in tempor ante mattis eget. Phasellus venenatis lectus sit amet nibh fermentum, eu euismod mauris pretium. Aenean mi nunc, elementum nec tincidunt quis, vehicula eu lacus. Morbi aliquam scelerisque turpis sed luctus. In vestibulum hendrerit dignissim. Donec tempus arcu eu vulputate tristique. Curabitur arcu sem, volutpat vitae urna non, scelerisque posuere mi. Vivamus rhoncus tortor varius luctus dapibus. Proin ultricies dui at erat rhoncus, non lacinia erat rhoncus. Etiam congue enim vel justo lacinia cursus. Proin varius fringilla urna, sit amet aliquet mi pretium ac. Etiam blandit nisi nisl, eget pretium sapien laoreet eu. Duis ac nisi ac leo tincidunt hendrerit tincidunt et ante. Suspendisse tempor cursus orci, at bibendum sapien maximus non. Nunc vestibulum libero risus, id laoreet mauris consequat id. Nam et quam eros. Pellentesque non arcu auctor, tempus elit sit amet, aliquet mi. Suspendisse id ullamcorper massa. Vivamus nec nisi vehicula, interdum magna vitae, hendrerit ipsum. Vivamus nulla velit, faucibus vitae est sed, mollis finibus ex. Aliquam vel enim tellus. Ut vitae massa condimentum urna euismod imperdiet. Integer posuere massa ultrices tincidunt placerat. Praesent nunc est, ullamcorper quis tincidunt a, ultricies a lacus. Duis posuere faucibus dolor, eget dignissim urna placerat a. Vestibulum vel sem vitae dolor scelerisque rhoncus ut eget lacus. Donec sit amet orci quis nisl ultricies sagittis in eget turpis. Curabitur dapibus porttitor ligula, blandit suscipit lectus luctus sed. Donec dignissim mi sed scelerisque hendrerit. Phasellus venenatis ligula id tortor tincidunt mollis. Etiam at nunc ac nulla fermentum luctus a sed nisl. Donec luctus, lectus nec facilisis dapibus, nulla nisi elementum sem, in luctus ligula enim vel elit. Nam a ligula et metus pulvinar laoreet. Ut pulvinar odio at massa viverra, sagittis suscipit ante faucibus. Sed auctor urna ac tellus euismod sollicitudin. Duis condimentum nunc tortor. Nulla in ante imperdiet, facilisis nulla a, imperdiet ipsum. Donec ultricies feugiat est luctus efficitur. Proin mattis cursus leo a ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed cursus metus. Donec non nunc quis est lobortis sollicitudin et vel ante. Cras ex felis, mattis quis lobortis vitae, condimentum ut risus. Vivamus nisl dolor, ullamcorper nec imperdiet sit amet, bibendum vel nunc. Sed lobortis porta arcu non dignissim. Fusce ut velit interdum, dignissim odio ut, rhoncus diam. Ut facilisis nisl tortor, vel volutpat lacus posuere vitae. Proin commodo lectus dui, ac consectetur orci facilisis id. Quisque arcu odio, viverra ut nibh at, tincidunt sodales sapien. Morbi malesuada mauris eros. Quisque varius felis dui, non posuere tortor porta condimentum. Praesent vel eleifend ligula, hendrerit consequat risus. Suspendisse ultricies tortor eros, eu tristique nisi facilisis vel. Donec malesuada dui at est elementum, sit amet lobortis lectus dictum. Fusce a sagittis risus. Vestibulum accumsan lacus a commodo ultricies. In at odio vestibulum, fringilla eros at, congue lorem. Pellentesque posuere at nibh quis blandit. Aenean scelerisque in nulla cursus gravida. Suspendisse at ex metus. Phasellus suscipit, ligula non convallis molestie, metus urna rutrum sapien, eleifend tincidunt justo urna quis nibh. Etiam ut libero rutrum, mollis metus nec, fermentum diam. Nunc tempor ante sed rutrum eleifend. Cras in enim iaculis est venenatis sagittis semper faucibus justo. Nam sit amet purus leo. Morbi nec ultricies erat, eu pellentesque justo. Sed viverra est vel ultricies accumsan. Duis suscipit lorem nibh, a mattis magna aliquam at. Donec hendrerit quis nisi et sollicitudin. Aliquam bibendum eleifend scelerisque. Mauris sed accumsan nisi. Mauris vitae dolor eu nulla convallis lacinia. Phasellus justo sapien, luctus vel interdum ut, commodo in dolor. Nullam ultricies lacus eget laoreet laoreet. Aenean ac nisi nec ex molestie hendrerit in in tellus. Quisque ut vestibulum magna, vitae pharetra magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vehicula dapibus tortor, in tincidunt nisl vehicula a. Donec ac suscipit dolor, vel finibus ex. Quisque ullamcorper quam quis aliquet maximus. Fusce volutpat finibus lectus, nec laoreet massa. Nulla vitae molestie odio. Donec in libero ac massa consectetur aliquet. Donec consequat eget ipsum vitae placerat. Phasellus sodales fringilla pellentesque. Ut tristique tincidunt nunc ut blandit. Aenean purus elit, scelerisque fermentum ex id, ultricies auctor libero. Fusce nec bibendum mi. Cras eu tincidunt tortor. Ut iaculis arcu nec metus efficitur interdum. Morbi bibendum, nibh a iaculis efficitur, lorem sapien scelerisque mi, nec elementum arcu ex a nisi. Praesent venenatis maximus odio sit amet maximus. Phasellus dignissim, metus ac eleifend mollis, diam elit varius tortor, ut pellentesque urna enim vitae eros. Aliquam blandit eu arcu venenatis semper. Quisque pulvinar vestibulum massa ut elementum. Donec lacinia, arcu at cursus aliquet, turpis odio consequat felis, euismod vestibulum neque odio ut justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sit amet orci dignissim sem rutrum pretium at vel neque. Cras eget elementum erat, rutrum auctor mauris. Sed vestibulum ligula dui, sit amet elementum purus venenatis sed. Curabitur ac libero risus. Quisque convallis massa eu erat blandit fermentum. Sed erat ante, congue vitae mauris eget, vulputate elementum mi. Suspendisse potenti. Integer imperdiet quis metus sed pharetra. Aenean id odio luctus, semper dui non, condimentum magna. Mauris scelerisque sed mi vitae mattis. Aliquam posuere ligula et enim placerat mattis. Proin tempor, justo eget mattis vehicula, dolor nibh tempus purus, vel efficitur purus magna ut ex. Fusce dictum scelerisque mi, vel efficitur est accumsan eu. Nunc porttitor mi id tortor tempus tincidunt. Mauris nibh eros, tincidunt et mi id, placerat commodo ante. Fusce molestie orci magna, pretium mattis odio posuere et. Suspendisse sed velit aliquet, accumsan tellus sit amet, accumsan est. Nunc maximus, nibh quis volutpat aliquet, lorem nisi lobortis lorem, et rutrum diam dui eu augue. Quisque ipsum leo, eleifend non dapibus vitae, accumsan eget ipsum. Quisque ultricies, ante et luctus maximus, orci sem tristique neque, vel egestas erat ligula ac magna. Proin ornare condimentum sodales. Proin tincidunt ultrices massa et efficitur. Curabitur commodo, nulla sit amet hendrerit posuere, nisi dui molestie erat, quis placerat mi arcu id risus. In diam neque, elementum sed faucibus sed, ultrices vitae quam. Donec varius tristique mauris, vitae condimentum eros vulputate a. Suspendisse efficitur lectus nec justo sagittis hendrerit. Integer facilisis maximus erat nec dapibus. Nullam et tortor sed diam pellentesque congue ut sed libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus euismod ac tortor eget posuere. Nunc scelerisque malesuada tellus at cursus. Pellentesque mollis est sed laoreet lacinia. Proin scelerisque lacinia erat, nec aliquam elit lacinia sed. Fusce sodales, magna a laoreet laoreet, ligula metus volutpat dui, et lobortis arcu diam vel sem. Mauris at ornare enim. Morbi tristique elementum rutrum. Praesent non metus mi. Nam euismod ligula feugiat pellentesque placerat. Vestibulum interdum velit ut dignissim lobortis. Morbi vehicula iaculis egestas. Duis tempus posuere mi, in placerat elit blandit id. Etiam odio orci, ultricies non neque eu, malesuada pellentesque risus. Vestibulum accumsan accumsan turpis, vitae posuere sapien. Curabitur varius dictum bibendum. In ac orci diam. Nunc ipsum metus, venenatis at iaculis vitae, lobortis sit amet tellus. Nunc faucibus consequat lorem nec sagittis. Quisque faucibus metus tempus dapibus laoreet. Mauris vehicula odio in ex viverra placerat. Quisque facilisis justo et elit viverra, in mollis urna feugiat. Mauris vehicula risus porta fermentum ullamcorper. Aliquam facilisis dictum dictum. Aenean vitae nisl cursus, interdum dui in, venenatis lacus. Morbi euismod mi in malesuada congue. Cras et lacus in felis fermentum accumsan. Praesent convallis ante commodo neque eleifend, id varius tellus fringilla. Vestibulum et justo ac velit luctus facilisis. Donec nulla velit, ornare luctus lorem vel, vehicula tincidunt lorem. Integer egestas turpis massa, ut bibendum quam euismod quis. Ut sed dui vestibulum tellus faucibus consectetur at ut erat. Suspendisse et sagittis metus. Nullam dictum eget orci et tristique. Suspendisse vel varius est, id tristique lacus. Maecenas eget risus magna. Curabitur id vehicula nisl. Cras in volutpat nulla. Proin tellus ligula, tempor ut vulputate id, consequat et magna. Nullam fringilla congue neque ut consectetur. Quisque tempor varius massa, id vulputate sapien maximus ut. In posuere nisl ipsum, eget dapibus dui mollis eget. Fusce congue in est vitae blandit. Nulla facilisi. Curabitur tempor suscipit hendrerit. Aliquam feugiat lobortis magna, sit amet vulputate ipsum pharetra sed. Suspendisse imperdiet dignissim massa et lacinia. Fusce ut ante sed arcu blandit dictum a in felis. Proin ultricies facilisis odio quis imperdiet. Nullam sed tristique arcu. Aliquam ac ligula ut risus ullamcorper venenatis in nec ex. Nam iaculis ligula dui, et euismod augue elementum vel. Suspendisse posuere interdum interdum. Praesent ipsum nisi, sodales id ultrices eget, viverra sed enim. Fusce vel lacus viverra, luctus urna tristique, venenatis lacus. Nam vestibulum urna sit amet mi congue dapibus. Nunc et auctor nunc, quis laoreet nisi. Quisque bibendum diam purus, ac vulputate eros interdum in. Nunc vel pellentesque turpis. Suspendisse viverra, dolor varius sollicitudin mollis, mauris ipsum cursus magna, quis molestie mi metus eget risus. Duis ex lacus, porta eu dolor at, pulvinar molestie nisi. Integer vel ullamcorper mauris, et fermentum libero. Sed porta malesuada odio eget tincidunt. Ut consequat nisi nec tortor aliquam commodo. Aliquam erat volutpat. Quisque rutrum fringilla erat non ornare. Nulla facilisi. Mauris dictum placerat dolor, accumsan posuere ante aliquet quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec euismod nisl eu ornare fringilla. Pellentesque laoreet convallis risus. Proin quis libero ante. Pellentesque iaculis velit ac nibh placerat, id vehicula magna consectetur. Nunc bibendum lacus est, vitae varius purus venenatis sit amet. Etiam eu sapien condimentum, condimentum nisl et, tincidunt turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In leo est, iaculis faucibus finibus et, mollis in augue. In ac dictum magna. Sed congue erat est, fringilla commodo metus lobortis vitae. Vestibulum tempor augue a vulputate aliquet. Quisque vitae ullamcorper purus. In in blandit ex, pellentesque fermentum tortor. Maecenas eu urna pellentesque metus tincidunt facilisis vitae sit amet magna. Praesent elementum turpis vitae orci molestie pharetra.',
    assignedTo: [],
    price: 5000,
    status: 0,
    quantity: 5,
    visibility: true,
    isMaxOne: true,
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
