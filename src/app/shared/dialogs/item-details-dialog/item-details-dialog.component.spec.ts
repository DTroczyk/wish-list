import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsDialogComponent } from './item-details-dialog.component';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsDialogComponent;
  let fixture: ComponentFixture<ItemDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailsDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
