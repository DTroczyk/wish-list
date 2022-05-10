import { Component, OnInit } from '@angular/core';
import Wish from 'src/app/models/wish';
import { UserService } from 'src/app/services/user/user.service';
import { SampleWishes } from './sample-wishes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public wishes: Wish[] = SampleWishes;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  visibility(item: Wish): boolean {
    return this.userService.wishVisibility(item);
  }
}
