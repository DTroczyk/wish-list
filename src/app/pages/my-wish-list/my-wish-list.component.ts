import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Subscription } from 'rxjs';
import Wish from 'src/app/models/wish';
import { AddOrEditDialog } from 'src/app/pages/my-wish-list/add-or-edit-dialog/add-or-edit-dialog';
import { WishService } from 'src/app/services/wish/wish.service';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrls: ['./my-wish-list.component.scss'],
})
export class MyWishListComponent implements OnInit {
  public wishes!: Wish[];
  public isWishesLoading: boolean = true;

  private subs: Subscription;

  constructor(private wishService: WishService, public dialog: MatDialog) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.subs.add(
      this.wishService.userWishesSubject.subscribe((res) => {
        this.wishes = res;
        this.isWishesLoading = false;
      })
    );
  }

  openDialog(wish?: Wish): void {
    const data = { ...wish };
    const dialogRef = this.dialog.open(AddOrEditDialog, {
      data,
      maxWidth: '100vw',
      width: '600px',
      maxHeight: '85vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.wishService.addOrEditWish(result);
    });
  }

  openConfirmRemoveDialog(wish: Wish): void {
    const dialogData: ConfirmDialogData = {
      title: 'Remove?',
      message: `Do you really want to delete ${wish.name}?`,
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.wishService.deleteWish(wish.id);
    });
  }

  openConfirmCompleteDialog(wish: Wish): void {
    const dialogData: ConfirmDialogData = {
      title: 'Wish complete?',
      message: `Do you get ${wish.name} from someone? If you click 'Yes', the wish will be hidden.`,
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.wishService.completeWish(wish.id);
    });
  }
}
