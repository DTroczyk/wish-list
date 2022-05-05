import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Wish from 'src/app/models/wish';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  public wishesSubject: BehaviorSubject<Wish[]>;

  private wishes!: Wish[];

  constructor() {
    this.wishesSubject = new BehaviorSubject<Wish[]>([]);
  }

  setWishes(wishes: Wish[]) {
    this.wishes = wishes;
    this.wishesSubject.next([...this.wishes]);
  }

  addOrEditWish(wish: Wish) {
    setTimeout(() => {
      if (wish && this.wishes) {
        if (wish.price) wish.price = wish.price * 100;

        if (this.wishes.find((w) => w.id === wish.id)) {
          this.wishes = this.wishes.map((w) =>
            w.id === wish.id ? (w = wish) : w
          );
        } else {
          // Set id
          if (this.wishes) wish.id = this.wishes[this.wishes.length - 1].id + 1;

          this?.wishes.push(wish);
        }
        this.wishesSubject.next([...this.wishes]);
      }
    }, 1000);
  }

  deleteWish(wishId: number) {
    if (this.wishes) {
      this.wishes = this.wishes.filter((w) => w.id !== wishId);
      this.wishesSubject.next([...this.wishes]);
    }
  }
}
