import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { AssignDialogData } from '../item-details-dialog.component';

@Component({
  selector: 'app-assign-dialog',
  templateUrl: './assign-dialog.component.html',
  styleUrls: ['./assign-dialog.component.scss'],
})
export class AssignDialogComponent {
  public sliderValue: number = 0;
  public amountValue: number = 0;
  public maxValue: number = 100;

  constructor(
    public dialogRef: MatDialogRef<AssignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssignDialogData,
    private userService: UserService
  ) {
    if (this.data.wish.price)
      this.maxValue =
        this.data.wish.price * this.data.wish.quantity - this.data.wish.status;
    if (this.data.isEditMode) {
      let user = this.userService.getLoggedUser;
      let userStatus = this.data.wish.assignedTo.find(
        (assign) => assign.user.toLowerCase() === user.login?.toLowerCase()
      );
      if (userStatus && this.data.wish.price) {
        this.amountValue = userStatus.value / 100;
        this.maxValue =
          this.data.wish.price * this.data.wish.quantity -
          this.data.wish.status +
          userStatus.value;
        this.sliderValue = Math.round(
          (this.amountValue / this.maxValue) * 10000
        );
      }
    }
  }

  onSliderChange() {
    if (this.data.wish.price)
      this.amountValue = Math.round(
        (this.sliderValue / 100) * (this.maxValue / 100)
      );
  }

  onAmountChange() {
    if (this.data.wish.price)
      this.sliderValue = Math.round(
        (this.amountValue / this.maxValue) * 100 * 100
      );
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.data.wish.price && this.sliderValue > 0 && this.amountValue > 0) {
      this.dialogRef.close(this.amountValue * 100);
    } else {
      this.dialogRef.close(true);
    }
  }
}
