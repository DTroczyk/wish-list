import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App components
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/index.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MyWishListComponent } from './pages/my-wish-list/my-wish-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';

// Dialogs
import { AddOrEditDialog } from './pages/my-wish-list/add-or-edit-dialog/add-or-edit-dialog';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { ItemDetailsDialogComponent } from './shared/dialogs/item-details-dialog/item-details-dialog.component';

// Shared components
import { WishItemComponent } from './shared/wish-item/wish-item.component';

// Material modules
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FriendWishListComponent } from './pages/friends/friend-wish-list/friend-wish-list.component';
import { AssignDialogComponent } from './shared/dialogs/item-details-dialog/assign-dialog/assign-dialog.component';

@NgModule({
  declarations: [
    AddOrEditDialog,
    AppComponent,
    ContactComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    NotFoundComponent,
    MessagesComponent,
    MyWishListComponent,
    ConfirmDialogComponent,
    WishItemComponent,
    ItemDetailsDialogComponent,
    FriendsComponent,
    FriendWishListComponent,
    AssignDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    LayoutModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    NgbModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
