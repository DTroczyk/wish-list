import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import User from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrls: ['./my-wish-list.component.scss'],
})
export class MyWishListComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService) {
    this.user = userService.user as User;
  }

  ngOnInit(): void {}
}
