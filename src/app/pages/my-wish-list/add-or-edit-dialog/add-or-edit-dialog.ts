import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-or-edit-dialog',
  templateUrl: './add-or-edit-dialog.html',
  styleUrls: ['./add-or-edit-dialog.scss'],
})
export class AddOrEditDialog implements OnInit {
  public isEditMode = true;

  constructor(
    public dialogRef: MatDialogRef<AddOrEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (Object.keys(this.data).length === 0) this.isEditMode = false;
    this.data.price = this.data.price / 100;
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
