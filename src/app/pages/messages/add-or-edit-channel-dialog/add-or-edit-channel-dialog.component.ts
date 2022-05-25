import { COMMA, ENTER } from '@angular/cdk/keycodes';
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
import { map, startWith } from 'rxjs';
import { Channel } from 'src/app/models/chat';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-or-edit-channel-dialog',
  templateUrl: './add-or-edit-channel-dialog.component.html',
  styleUrls: ['./add-or-edit-channel-dialog.component.scss'],
})
export class AddOrEditChannelDialogComponent implements OnInit {
  public isEditMode: boolean = false;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public friendsList: string[] = [];
  @ViewChild('peopleInput') friendInput!: ElementRef<HTMLInputElement>;
  public peopleCtrl = new FormControl();
  public nameCtrl = new FormControl();
  public filteredPeople;

  public choosenPeople: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddOrEditChannelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Channel,
    private userService: UserService
  ) {
    if (userService.getLoggedUser.friends)
      this.friendsList = [...userService.getLoggedUser.friends];
    else this.friendsList = [];
    this.filteredPeople = this.peopleCtrl.valueChanges.pipe(
      startWith(null),
      map((friend: string | null) =>
        friend ? this._filter(friend) : this.friendsList.slice()
      )
    );
  }

  ngOnInit(): void {
    if (this.data) {
      this.isEditMode = true;
      this.choosenPeople = this.data.users;
      this.friendsList = this._filterFriends();
    } else {
      this.data = { id: 0, name: '', users: [] };
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (
      value &&
      this.choosenPeople.find(
        (friend) => friend.toLowerCase() !== value.toLocaleLowerCase()
      )
    ) {
      this.choosenPeople.push(value);
    }

    event.chipInput!.clear();
    this.peopleCtrl.setValue(null);
    this.friendsList = this._filterFriends();
  }

  remove(friend: string): void {
    const index = this.choosenPeople.indexOf(friend);

    if (index >= 0) {
      this.choosenPeople.splice(index, 1);
    }
    this.friendsList = this._filterFriends();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.choosenPeople.push(event.option.viewValue);
    this.friendInput.nativeElement.value = '';
    this.friendsList = this._filterFriends();
    this.peopleCtrl.setValue(null);
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
        (friend) => !this.choosenPeople.includes(friend)
      );
    return [];
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.data.users = this.choosenPeople;
    this.dialogRef.close(this.data);
  }
}
