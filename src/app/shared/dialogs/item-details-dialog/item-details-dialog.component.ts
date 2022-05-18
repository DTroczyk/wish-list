import { Component, Inject, OnDestroy } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { users } from 'src/app/models/temp-data';
import Wish from 'src/app/models/wish';
import { UserService } from 'src/app/services/user/user.service';
import { WishService } from 'src/app/services/wish/wish.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AssignDialogComponent } from './assign-dialog/assign-dialog.component';

@Component({
  selector: 'app-item-details-dialog',
  templateUrl: './item-details-dialog.component.html',
  styleUrls: ['./item-details-dialog.component.scss'],
})
export class ItemDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ItemDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public wish: Wish,
    public dialog: MatDialog,
    private wishService: WishService,
    private userService: UserService
  ) {}

  openDialog(wish: Wish): void {
    const data = { ...wish };
    const dialogRef = this.dialog.open(AssignDialogComponent, {
      data,
      width: '400px',
      maxWidth: '100vw',
      maxHeight: '100vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.wishService.assignUser(wish.id, 100 / this.wish.quantity);
      } else {
        this.wishService.assignUser(wish.id, result);
      }
    });
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Are you sure?',
        message: 'Do you want to remove yourself from this wish?',
      },
      width: '200px',
      maxWidth: '100vw',
      maxHeight: '100vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.wishService.unassignUser(this.wish.id);
      }
    });
  }

  wishStatus(wishStatus: number | null): string {
    if (!wishStatus) {
      return 'Free';
    }
    if (
      (this.wish.price && wishStatus >= this.wish.price) ||
      (!this.wish.price && wishStatus === 100)
    ) {
      return 'Done';
    }
    return 'In progress';
  }

  isWishFilled(): boolean {
    return (
      (this.wish.price && this.wish.status >= this.wish.price) ||
      (!this.wish.price && this.wish.status === 100)
    );
  }

  isItLoggedUser(user: string): boolean {
    if (this.userService.getLoggedUser)
      return (
        user.toLowerCase() ===
        this.userService.getLoggedUser.login?.toLowerCase()
      );
    return false;
  }

  isUserAssigned(): boolean {
    if (
      this.wish.assignedTo.find((assigned) =>
        this.isItLoggedUser(assigned.user)
      )
    )
      return true;
    return false;
  }

  isDeadlineWarning(): boolean {
    if (this.wish.deadline) {
      return (
        new Date(new Date().setDate(new Date().getDate() + 7)) >
        new Date(this.wish.deadline)
      );
    }
    return false;
  }
}
