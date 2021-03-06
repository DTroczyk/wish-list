import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import User from 'src/app/models/user';
import { WishService } from '../wish/wish.service';
import { SampleUsers } from './sampleUsers';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let userDatabase = SampleUsers;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishService],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be user login and logout', fakeAsync(() => {
    // @ts-ignore
    service.userApi = userDatabase;
    expect(userDatabase.length).toEqual(3);
    var user: User = null as any;
    let sub = service.userSubject.subscribe((res) => (user = res.user));
    expect(user).toBeNull();
    service.login('user1', 'pass');
    tick(10000);
    expect(user).toEqual(userDatabase[0]);

    service.logout();
    tick(10000);
    expect(user).toBeNull();

    sub.unsubscribe();
  }));
});
