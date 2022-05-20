import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { map, startWith } from 'rxjs';
import Wish from 'src/app/models/wish';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-or-edit-dialog',
  templateUrl: './add-or-edit-dialog.html',
  styleUrls: ['./add-or-edit-dialog.scss'],
})
export class AddOrEditDialog implements OnInit {
  public isEditMode = true;

  public choosenVisibility!: VisibilityOptions;

  public choosenFriends: string[] = [];
  public friendCtrl = new FormControl();
  public friendsList: string[];
  public filteredFriends;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('friendInput') friendInput!: ElementRef<HTMLInputElement>;

  constructor(
    public dialogRef: MatDialogRef<AddOrEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Wish,
    private userService: UserService
  ) {
    if (userService.getLoggedUser.friends)
      this.friendsList = [...userService.getLoggedUser.friends];
    else this.friendsList = [];
    this.filteredFriends = this.friendCtrl.valueChanges.pipe(
      startWith(null),
      map((friend: string | null) =>
        friend ? this._filter(friend) : this.friendsList.slice()
      )
    );
  }

  ngOnInit(): void {
    if (Object.keys(this.data).length === 0) {
      this.isEditMode = false;
      this.data.visibility = [];
      this.data.quantity = 1;
    } else if (
      Array.isArray(this.data.visibility) &&
      this.data.visibility.length > 0
    ) {
      this.choosenFriends = this.data.visibility;
    }
    this.friendsList = this._filterFriends();

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
    this.data.deadline = moment(this.data.deadline).toDate();
  }

  todayDate(): Date {
    return new Date();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (
      value &&
      this.choosenFriends.find(
        (friend) => friend.toLowerCase() !== value.toLocaleLowerCase()
      )
    ) {
      this.choosenFriends.push(value);
    }

    event.chipInput!.clear();
    this.friendCtrl.setValue(null);
    this.friendsList = this._filterFriends();
  }

  remove(friend: string): void {
    const index = this.choosenFriends.indexOf(friend);

    if (index >= 0) {
      this.choosenFriends.splice(index, 1);
    }
    this.friendsList = this._filterFriends();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.choosenFriends.push(event.option.viewValue);
    this.friendInput.nativeElement.value = '';
    this.friendsList = this._filterFriends();
    this.friendCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.friendsList.filter((friend) =>
      friend.toLowerCase().includes(filterValue)
    );
  }

  private _filterFriends(): string[] {
    if (this.userService.getLoggedUser.friends)
      return this.userService.getLoggedUser.friends.filter(
        (friend) => !this.choosenFriends.includes(friend)
      );
    return [];
  }
}

export enum VisibilityOptions {
  ForFriends,
  Private,
  ForSpecificPeople,
  Public,
}
