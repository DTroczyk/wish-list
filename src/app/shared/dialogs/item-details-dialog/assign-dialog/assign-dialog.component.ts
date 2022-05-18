import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Wish from 'src/app/models/wish';

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
    @Inject(MAT_DIALOG_DATA) public data: Wish
  ) {
    if (this.data.price)
      this.maxValue = this.data.price * this.data.quantity - this.data.status;
  }

  onSliderChange() {
    if (this.data.price)
      this.amountValue = Math.round(
        (this.sliderValue / 100) * (this.maxValue / 100)
      );
  }

  onAmountChange() {
    if (this.data.price)
      this.sliderValue = Math.round(
        (this.amountValue / this.maxValue) * 100 * 100
      );
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.data.price && this.sliderValue > 0 && this.amountValue > 0) {
      this.dialogRef.close(this.amountValue * 100);
    } else {
      this.dialogRef.close(true);
    }
  }
}
