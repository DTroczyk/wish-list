import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
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

  public chosenVisibility!: VisibilityOptions;
  public visibilityOptions = VisibilityOptions;

  public chosenFriends: string[] = [];
  public friendCtrl = new UntypedFormControl();
  public friendsList: string[];
  public filteredFriends;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('friendInput') friendInput!: ElementRef<HTMLInputElement>;

  constructor(
    public dialogRef: MatDialogRef<AddOrEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Wish,
    private userService: UserService,
    private formBuilder: UntypedFormBuilder
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
      this.chosenFriends = this.data.visibility;
    }
    this.friendsList = this._filterFriends();

    switch (this.data.visibility) {
      case undefined:
        this.chosenVisibility = VisibilityOptions.ForFriends;
        break;
      case false:
        this.chosenVisibility = VisibilityOptions.Private;
        break;
      case true:
        this.chosenVisibility = VisibilityOptions.Public;
        break;
      default:
        if (this.data.visibility.length > 0) {
          this.chosenVisibility = VisibilityOptions.ForSpecificPeople;
        } else {
          this.chosenVisibility = VisibilityOptions.ForFriends;
        }
        break;
    }
    if (this.data.price) this.data.price = this.data.price / 100;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    switch (this.chosenVisibility) {
      case VisibilityOptions.ForFriends:
        this.data.visibility = [];
        break;
      case VisibilityOptions.Private:
        this.data.visibility = false;
        break;
      case VisibilityOptions.ForSpecificPeople:
        this.data.visibility = this.chosenFriends;
        break;
      case VisibilityOptions.Public:
        this.data.visibility = true;
        break;
    }
    if (this.data.deadline)
      this.data.deadline = moment(this.data.deadline).toDate();
    if (this.data.quantity <= 0) {
      this.data.quantity = 1;
    }

    this.dialogRef.close(this.data);
  }

  todayDate(): Date {
    return new Date();
  }

  clearDate() {
    this.data.deadline = undefined;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (
      value &&
      this.chosenFriends.find(
        (friend) => friend.toLowerCase() !== value.toLocaleLowerCase()
      )
    ) {
      this.chosenFriends.push(value);
    }

    event.chipInput!.clear();
    this.friendCtrl.setValue(null);
    this.friendsList = this._filterFriends();
  }

  remove(friend: string): void {
    const index = this.chosenFriends.indexOf(friend);

    if (index >= 0) {
      this.chosenFriends.splice(index, 1);
    }
    this.friendsList = this._filterFriends();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chosenFriends.push(event.option.viewValue);
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
        (friend) => !this.chosenFriends.includes(friend)
      );
    return [];
  }

  //Form Control
  public addOrEditFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    price: [''],
    quantity: ['', Validators.required],
    description: ['', Validators.required],
    visibility: ['', Validators.required],
    imageUrl: [''],
    deadline: [''],
  });
}

export enum VisibilityOptions {
  ForFriends,
  Private,
  ForSpecificPeople,
  Public,
}
