import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import Wish from 'src/app/models/wish';
import { ItemDetailsDialogComponent } from 'src/app/shared/dialogs/item-details-dialog/item-details-dialog.component';

@Component({
  selector: 'app-friend-wish-list',
  templateUrl: './friend-wish-list.component.html',
  styleUrls: ['./friend-wish-list.component.scss'],
})
export class FriendWishListComponent implements OnInit {
  @Input() wishes: Wish[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(wish?: Wish): void {
    const data = wish;
    const dialogRef = this.dialog.open(ItemDetailsDialogComponent, {
      data,
      maxHeight: '90vh',
      maxWidth: '100vw',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
