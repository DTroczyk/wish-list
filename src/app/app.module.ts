import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MyWishListComponent } from './pages/my-wish-list/my-wish-list.component';
import { AddOrEditDialog } from './pages/my-wish-list/add-or-edit-dialog/add-or-edit-dialog';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { WishItemComponent } from './shared/wish-item/wish-item.component';
import { ItemDetailsDialogComponent } from './shared/dialogs/item-details-dialog/item-details-dialog.component';
import { AuthGuard } from './guards/index.guard';

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
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    NgbModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
