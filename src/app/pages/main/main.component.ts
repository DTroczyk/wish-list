import { Component, OnInit } from '@angular/core';

import { SampleWishes } from './sample-wishes';
import Wish from 'src/app/models/wish';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public wishes: Wish[] = SampleWishes;

  constructor() {}

  ngOnInit(): void {}
}
