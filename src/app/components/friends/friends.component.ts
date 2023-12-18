import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PublicUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  public friends: PublicUser[] = [];
  public isFriendsLoading: boolean = true;

  private subs: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subs.add(
      this.userService.friendsSubject.subscribe((res) => {
        this.friends = res;
        this.isFriendsLoading = false;
      })
    );
  }
}
