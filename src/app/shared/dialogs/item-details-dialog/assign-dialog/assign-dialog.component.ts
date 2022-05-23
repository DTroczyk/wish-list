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
  public quantityValue: number = 0;
  public maxValue: number = 100;
  public maxQuantity: number = 1;

  constructor(
    public dialogRef: MatDialogRef<AssignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssignDialogData,
    private userService: UserService
  ) {
    if (this.data.wish.price) {
      if (this.data.wish.isMaxOne) {
        this.maxValue = this.data.wish.price;
        if (
          this.maxValue + this.data.wish.status >
          this.data.wish.price * this.data.wish.quantity
        ) {
          this.maxValue =
            this.data.wish.price * this.data.wish.quantity -
            this.data.wish.status;
        }
      } else {
        this.maxValue =
          this.data.wish.price * this.data.wish.quantity -
          this.data.wish.status;
        this.maxQuantity =
          this.maxValue / this.data.wish.price / this.data.wish.quantity;
      }
    } else {
      this.maxQuantity = Math.ceil(
        (100 - this.data.wish.status) / (100 / this.data.wish.quantity)
      );
    }

    if (this.data.isEditMode) {
      let user = this.userService.getLoggedUser;
      let userStatus = this.data.wish.assignedTo.find(
        (assign) => assign.user.toLowerCase() === user.login?.toLowerCase()
      );
      if (userStatus && this.data.wish.price) {
        this.amountValue = userStatus.value / 100;
        if (this.data.wish.isMaxOne) {
          this.maxValue = this.data.wish.price;
          if (
            this.maxValue + this.data.wish.status >
            this.data.wish.price * this.data.wish.quantity
          ) {
            this.maxValue =
              this.data.wish.price * this.data.wish.quantity -
              this.data.wish.status;
          }
        } else {
          this.maxValue =
            this.data.wish.price * this.data.wish.quantity -
            this.data.wish.status +
            userStatus.value;
        }
        this.sliderValue = Math.round(
          (this.amountValue / this.maxValue) * 10000
        );
      }
      if (userStatus && !this.data.wish.price) {
        this.maxQuantity = Math.ceil(
          (100 - this.data.wish.status + userStatus.value) /
            (100 / this.data.wish.quantity)
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

  onQuantityChange() {
    if (this.data.wish.price) {
      this.amountValue = (this.data.wish.price * this.quantityValue) / 100;
      if (this.amountValue > this.maxValue / 100) {
        this.amountValue = this.maxValue / 100;
      }
      this.sliderValue = Math.round(
        (this.amountValue / this.maxValue) * 100 * 100
      );
    }
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.data.wish.price && this.sliderValue > 0 && this.amountValue > 0) {
      this.dialogRef.close(this.amountValue * 100);
    } else {
      if (this.quantityValue > 0 && !this.data.wish.isMaxOne) {
        this.dialogRef.close(
          (100 / this.data.wish.quantity) * this.quantityValue
        );
      } else if (this.quantityValue <= 0 && !this.data.wish.isMaxOne) {
        this.dialogRef.close(0);
      } else {
        this.dialogRef.close(true);
      }
    }
  }
}
