import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import User from 'src/app/models/user';
import Wish from 'src/app/models/wish';
import { UserService } from 'src/app/services/user/user.service';
import { AddOrEditDialog } from 'src/app/pages/my-wish-list/add-or-edit-dialog/add-or-edit-dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrls: ['./my-wish-list.component.scss'],
})
export class MyWishListComponent implements OnInit {
  public user!: User;
  public isWishesLoading = true;

  private subs: Subscription;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.subs.add(
      this.userService.userSubject.subscribe((res) => {
        this.user = res;
        this.isWishesLoading = false;
      })
    );
  }

  openDialog(wish?: Wish): void {
    const data = { ...wish };
    const dialogRef = this.dialog.open(AddOrEditDialog, {
      data,
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.userService.addOrEditWish(result);
    });
  }
}
