import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWishListComponent } from './my-wish-list.component';

describe('MyWishListComponent', () => {
  let component: MyWishListComponent;
  let fixture: ComponentFixture<MyWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
