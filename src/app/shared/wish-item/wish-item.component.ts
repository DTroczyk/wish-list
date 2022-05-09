import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Wish from 'src/app/models/wish';
import { ItemDetailsDialogComponent } from '../dialogs/item-details-dialog/item-details-dialog.component';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent implements OnInit {
  @Input() public item: Wish = {
    id: 0,
    name: '',
    description: '',
    userId: '',
    assignedTo: [],
    status: 0,
  };

  constructor(public dialog: MatDialog) {}

  openDialog(wish?: Wish): void {
    const data = { ...wish };
    const dialogRef = this.dialog.open(ItemDetailsDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit(): void {}
}
