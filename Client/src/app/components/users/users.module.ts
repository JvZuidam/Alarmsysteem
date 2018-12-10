import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserNotfoundComponent } from './user-notfound/user-notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsersComponent,
    UserItemComponent,
    UserListComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserNotfoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientModule,
    NgbModule,  
    UserRoutingModule   // Order is important, MUST be BEFORE AppRoutingModule!
    // AppRoutingModule  // NO import of AppRoutingModule - would overwrite previous routes!
  ],
  providers: [
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
