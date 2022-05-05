import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import Wish from 'src/app/models/wish';
import { SampleWishes } from 'src/app/pages/main/sample-wishes';

import { WishService } from './wish.service';

describe('WishService', () => {
  let service: WishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be set wishes', fakeAsync(() => {
    let wishes: Wish[] = [];
    let subs = service.wishesSubject.subscribe((res) => (wishes = res));
    tick(10000);
    expect(wishes.length).toEqual(0);

    service.setWishes([...SampleWishes]);
    tick(10000);
    expect(wishes.length).toEqual(7);

    subs.unsubscribe();
  }));

  it('should add the wish', fakeAsync(() => {
    let wishes: Wish[] = [];
    let subs = service.wishesSubject.subscribe((res) => (wishes = res));
    service.setWishes([...SampleWishes]);
    tick(10000);
    expect(wishes.length).toEqual(7);

    let newWish: Wish = {
      id: 16,
      name: 'New Wish',
      description: 'Newest wish on the list',
      userId: 'user',
    };
    service.addOrEditWish(newWish);
    tick(10000);
    expect(wishes.length).toEqual(8);
    let foundWish = wishes.find((w) => w.id === 8);
    expect(foundWish).toEqual(newWish);

    subs.unsubscribe();
  }));

  it('should edit the wish', fakeAsync(() => {
    let wishes: Wish[] = [];
    let subs = service.wishesSubject.subscribe((res) => (wishes = res));
    service.setWishes([...SampleWishes]);
    tick(10000);
    expect(wishes.length).toEqual(7);

    let orgWish = wishes[Math.floor((Math.random() * 10000) % wishes.length)];
    let editedWish = { ...orgWish };
    editedWish.name = 'Sample wish';
    editedWish.price = 587;
    editedWish.userId = 'testuser95621';
    expect(orgWish).not.toEqual(editedWish);

    service.addOrEditWish(editedWish);
    tick(10000);
    expect(wishes.length).toEqual(7);

    let foundWish = wishes.find((w) => w.id === orgWish.id);
    expect(foundWish).not.toBeUndefined();
    expect(foundWish).toEqual(editedWish);
    expect(foundWish).not.toEqual(orgWish);
  }));

  it('should remove the wish', fakeAsync(() => {
    let wishes: Wish[] = [];
    let subs = service.wishesSubject.subscribe((res) => (wishes = res));
    service.setWishes([...SampleWishes]);
    tick(10000);
    expect(wishes.length).toEqual(7);
    let wishToRemove =
      wishes[Math.floor((Math.random() * 10000) % wishes.length)];

    service.deleteWish(wishToRemove.id);
    tick(10000);
    expect(wishes.length).toEqual(6);
    let foundWish = wishes.find((w) => w.id === wishToRemove.id);
    expect(foundWish).toBeUndefined();
  }));
});
