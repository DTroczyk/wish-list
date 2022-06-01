import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TranslateKey } from 'src/app/constants/translatekey';
import User from 'src/app/models/user';
import Wish from 'src/app/models/wish';
import { UserService } from 'src/app/services/user/user.service';
import { WishService } from 'src/app/services/wish/wish.service';
import { SampleWishesPL, SampleWishesEN } from './sample-wishes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public wishes: Wish[] = SampleWishesPL;
  public translatekey = TranslateKey + '.mainPage.';

  public user!: User;
  private subs: Subscription;

  constructor(
    private wishService: WishService,
    private userService: UserService,
    private translate: TranslateService
  ) {
    this.user = null as any;
    this.subs = new Subscription();

    this.subs.add(
      this.userService.userSubject.subscribe((res) => {
        this.user = res.user;
        if (this.user) {
          this.wishService.getWishes();
        } else {
          if (translate.currentLang === 'en') this.wishes = SampleWishesEN;
          else if (translate.currentLang === 'pl') this.wishes = SampleWishesPL;
        }
      })
    );

    this.subs.add(
      this.wishService.wishesSubject.subscribe((wishes) => {
        if (this.user) {
          this.wishes = [...wishes];
        } else {
          if (translate.currentLang === 'en') this.wishes = SampleWishesEN;
          else if (translate.currentLang === 'pl') this.wishes = SampleWishesPL;
        }
      })
    );
  }

  ngOnInit(): void {}

  visibility(item: Wish): boolean {
    return this.wishService.wishVisibility(item);
  }
}
