import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Wish from 'src/app/models/wish';

@Component({
  selector: 'app-add-or-edit-dialog',
  templateUrl: './add-or-edit-dialog.html',
  styleUrls: ['./add-or-edit-dialog.scss'],
})
export class AddOrEditDialog implements OnInit {
  public isEditMode = true;

  public choosenVisibility!: VisibilityOptions;
  public choosenFriends!: string[];

  constructor(
    public dialogRef: MatDialogRef<AddOrEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Wish
  ) {}

  ngOnInit(): void {
    if (Object.keys(this.data).length === 0) {
      this.isEditMode = false;
      this.data.visibility = [];
      this.data.quantity = 1;
    } else if (Array.isArray(this.data.visibility)) {
      this.data.visibility = this.choosenFriends;
    }

    switch (this.data.visibility) {
      case undefined:
        this.choosenVisibility = VisibilityOptions.ForFriends;
        break;
      case []:
        this.choosenVisibility = VisibilityOptions.ForFriends;
        break;
      case false:
        this.choosenVisibility = VisibilityOptions.Private;
        break;
      case length > 0:
        this.choosenVisibility = VisibilityOptions.ForSpecificPeople;
        break;
      case true:
        this.choosenVisibility = VisibilityOptions.Public;
        break;
    }
    if (this.data.price) this.data.price = this.data.price / 100;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    switch (this.choosenVisibility) {
      case VisibilityOptions.ForFriends:
        this.data.visibility = [];
        break;
      case VisibilityOptions.Private:
        this.data.visibility = false;
        break;
      case VisibilityOptions.ForSpecificPeople:
        this.data.visibility = this.choosenFriends;
        break;
      case VisibilityOptions.Public:
        this.data.visibility = true;
        break;
    }
    this.dialogRef.close(this.data);
    // if (this.data.deadline) {
    //   this.data.deadline.setDate(this.data.deadline.getDate() + 1);
    // }
  }

  todayDate(): Date {
    return new Date();
  }
}

export enum VisibilityOptions {
  ForFriends,
  Private,
  ForSpecificPeople,
  Public,
}
