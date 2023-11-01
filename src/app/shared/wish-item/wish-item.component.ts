import { Component, Input } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import Wish from 'src/app/models/wish';
import { UserService } from 'src/app/services/user/user.service';
import { ItemDetailsDialogComponent } from '../dialogs/item-details-dialog/item-details-dialog.component';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent {
  @Input() public item: Wish = {
    id: 0,
    name: '',
    description: '',
    userId: '',
    assignedTo: [],
    status: 0,
    quantity: 1,
    isComplete: false,
    isMaxOne: false,
  };

  constructor(public dialog: MatDialog, public userService: UserService) {}

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
