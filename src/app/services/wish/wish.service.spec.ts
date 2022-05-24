import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import Wish from 'src/app/models/wish';
import { SampleWishes } from './sample-wishes';
import { WishService } from './wish.service';

import User from 'src/app/models/user';
import { UserResponse, UserService } from '../user/user.service';
import { SampleUsers } from '../user/sampleUsers';
import { BehaviorSubject, Subscription } from 'rxjs';
import { STATUS_CODE } from '../user/status-code';

class MockedUserService {
  private userDataBase = [...SampleUsers];
  private user!: User | null;
  private userApi = [...this.userDataBase];

  public get getLoggedUser() {
    return this.user;
  }

  public userSubject: BehaviorSubject<UserResponse> =
    new BehaviorSubject<UserResponse>({
      user: null as any,
      status: STATUS_CODE.NOT_SEND,
    });

  login(username: string, password: string) {
    this.user = this.userApi.find(
      (user) => user.login.toLowerCase() === username.toLowerCase()
    ) as User | null;
    if (this.user) {
      this.userSubject.next({
        user: { ...this.user },
        status: STATUS_CODE.SUCCES,
      });
    }
  }

  getUserFriends(login: string): string[] {
    let user = this.userApi.find(
      (user) => user.login.toLowerCase() === login.toLowerCase()
    ) as User;
    if (user) {
      return user.friends;
    } else {
      return [];
    }
  }
}

describe('WishService', () => {
  let service: WishService;
  let mockedUserService: MockedUserService;
  let userWishes: Wish[];
  let wishes: Wish[];
  let subs: Subscription;

  beforeEach(() => {
    mockedUserService = new MockedUserService();
    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: mockedUserService }],
    });
    service = TestBed.inject(WishService);
    // @ts-ignore
    service.wishesDataBase = JSON.parse(JSON.stringify(SampleWishes));

    userWishes = [];
    wishes = [];
    subs = new Subscription();
    subs.add(service.userWishesSubject.subscribe((res) => (userWishes = res)));
    subs.add(service.wishesSubject.subscribe((res) => (wishes = res)));
    mockedUserService.login('user1', 'password');
    service.getWishes();
  });

  afterEach(() => {
    subs.unsubscribe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be set wishes', fakeAsync(() => {
    // Logged user wishes
    expect(userWishes.length).toEqual(2);
    // Other wishes
    expect(wishes.length).toEqual(7);
  }));

  it('should add the wish', fakeAsync(() => {
    expect(userWishes.length).toEqual(2);

    let newWish: Wish = {
      id: 16,
      name: 'New Wish',
      description: 'Newest wish on the list',
      userId: 'user1',
      assignedTo: [],
      quantity: 1,
      status: 0,
      isComplete: false,
      isMaxOne: false,
    };

    service.addOrEditWish(newWish);
    tick(10000);
    expect(userWishes.length).toEqual(3);
    let foundWish = userWishes.find((w) => w.id === 10);
    expect(foundWish).toEqual(newWish);
  }));

  it('should edit the wish', fakeAsync(() => {
    expect(userWishes.length).toEqual(2);

    let orgWish =
      userWishes[Math.floor((Math.random() * 10000) % userWishes.length)];
    let editedWish = { ...orgWish };
    editedWish.name = 'Sample wish';
    editedWish.price = 587;
    expect(orgWish).not.toEqual(editedWish);

    service.addOrEditWish(editedWish);
    tick(10000);
    expect(userWishes.length).toEqual(2);

    let foundWish = userWishes.find((w) => w.id === orgWish.id);
    expect(foundWish).not.toBeUndefined();
    expect(foundWish).toEqual(editedWish);
    expect(foundWish).not.toEqual(orgWish);
  }));

  it('should remove the wish', fakeAsync(() => {
    expect(userWishes.length).toEqual(2);
    let wishToRemove =
      userWishes[Math.floor((Math.random() * 10000) % userWishes.length)];

    service.deleteWish(wishToRemove.id);
    tick(10000);
    expect(userWishes.length).toEqual(1);
    let foundWish = userWishes.find((w) => w.id === wishToRemove.id);
    expect(foundWish).toBeUndefined();
  }));

  it('should complete the wish', () => {
    expect(userWishes.length).toEqual(2);
    let { id } = userWishes[0];
    expect(userWishes[0].isComplete).toBeFalse();

    service.completeWish(id);

    // Complete wish hide it from the list
    expect(userWishes.length).toEqual(1);
  });

  it('should not show complete wish', () => {
    let result = service.wishVisibility(SampleWishes[7]);
    expect(result).toBeFalse();
  });

  it('should show wish to owner', () => {
    let result = service.wishVisibility(SampleWishes[0]);
    expect(result).toBeTrue();
  });

  it('should show wish to assigned user', () => {
    let result = service.wishVisibility(SampleWishes[1]);
    expect(result).toBeTrue();
  });

  it('should not show filled wishes', () => {
    let result = service.wishVisibility(SampleWishes[8]);
    expect(result).toBeFalse();
  });

  it('should show friend wishes ', () => {
    let result = service.wishVisibility(SampleWishes[2]);
    expect(result).toBeTrue();

    mockedUserService.login('user2', 'pass');
    result = service.wishVisibility(SampleWishes[3]);
    expect(result).toBeFalse();
  });

  it('should show wish for specific person ', () => {
    let result = service.wishVisibility(SampleWishes[5]);
    expect(result).toBeTrue();

    mockedUserService.login('user2', 'pass');
    result = service.wishVisibility(SampleWishes[5]);
    expect(result).toBeFalse();
  });

  it('should show public wish', () => {
    mockedUserService.login('user3', 'pass');
    let result = service.wishVisibility(SampleWishes[6]);
    expect(result).toBeTrue();
  });

  it('should not show private wish', () => {
    mockedUserService.login('user3', 'pass');
    let result = service.wishVisibility(SampleWishes[7]);
    expect(result).toBeFalse();
  });

  it('should assign user to the wish', () => {
    expect(SampleWishes[2].assignedTo.length).toEqual(1);
    service.assignUser(3, 300);

    let wish = wishes.find((w) => w.id === SampleWishes[2].id);
    expect(wish?.assignedTo.length).toEqual(2);
    expect(wish?.assignedTo[1].user).toEqual('user1');
    expect(wish?.assignedTo[1].value).toEqual(300);
  });

  it('should user edit assign', () => {
    expect(SampleWishes[1].assignedTo.length).toEqual(2);

    let wish = wishes.find((w) => w.id === SampleWishes[1].id);
    expect(wish?.assignedTo.length).toEqual(2);
    expect(wish?.assignedTo[0].user).toEqual('user1');
    expect(wish?.assignedTo[0].value).toEqual(500);

    wish = wishes.find((w) => w.id === SampleWishes[1].id);
    service.assignUser(2, 100);
    expect(wish?.assignedTo.length).toEqual(2);
    expect(wish?.assignedTo[0].user).toEqual('user1');
    expect(wish?.assignedTo[0].value).toEqual(100);
  });

  it('should user unassign a wish', () => {
    expect(SampleWishes[1].assignedTo.length).toEqual(2);

    service.unassignUser(2);

    let wish = wishes.find((w) => w.id === SampleWishes[2].id);
    expect(wish?.assignedTo.length).toEqual(1);
  });
});
