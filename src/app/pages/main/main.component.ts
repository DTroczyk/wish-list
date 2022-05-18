import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import User from 'src/app/models/user';
import Wish from 'src/app/models/wish';
import { UserService } from 'src/app/services/user/user.service';
import { WishService } from 'src/app/services/wish/wish.service';
import { SampleWishes } from './sample-wishes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public wishes: Wish[] = SampleWishes;

  public user!: User;
  private subs: Subscription;

  constructor(
    private wishService: WishService,
    private userService: UserService
  ) {
    this.user = null as any;
    this.subs = new Subscription();

    this.subs.add(
      this.userService.userSubject.subscribe((res) => {
        this.user = res.user;
        if (this.user) {
          this.wishService.getWishes();
        } else {
          this.wishes = SampleWishes;
        }
      })
    );

    this.subs.add(
      this.wishService.wishesSubject.subscribe((wishes) => {
        if (this.user) {
          this.wishes = [...wishes];
        } else {
          this.wishes = SampleWishes;
        }
      })
    );
  }

  ngOnInit(): void {}

  visibility(item: Wish): boolean {
    return this.wishService.wishVisibility(item);
  }
}
