import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Wish from 'src/app/models/wish';
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
    public dialog: MatDialog
  ) {}

  openDialog(wish?: Wish): void {
    const data = { ...wish };
    const dialogRef = this.dialog.open(AssignDialogComponent, {
      data,
      width: '400px',
      maxWidth: '100vw',
      maxHeight: '100vh',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  wishStatus(wishStatus: number | null): string {
    if (!wishStatus) {
      return 'Free';
    }
    if (
      wishStatus === this.wish.price ||
      (!this.wish.price && wishStatus === 100)
    ) {
      return 'Done';
    }
    return 'In progress';
  }
}
