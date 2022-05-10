import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import User from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  private user!: User;
  public newUser!: User;

  private subs!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subs = new Subscription();
    this.subs.add(
      this.userService.userSubject.subscribe((res) => {
        this.user = res.user;
        this.newUser = { ...this.user };
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe;
  }
}
