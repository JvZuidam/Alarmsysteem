import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminGuard as UserIsAdmin } from '../../admin.guard';
import { UserNotfoundComponent } from './user-notfound/user-notfound.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: 'users/list', component: UserListComponent },
  { path: 'users/list/new', component: UserEditComponent, data: { 
    userAlreadyExists : false,
    title: 'New User' 
  } },
  { path: 'users/list/:id', component: UserDetailsComponent },
  { path: 'users/list/:id/edit', component: UserEditComponent, data: { userAlreadyExists: true, title: 'Edit User' } },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UserDetailsComponent },
    { path: 'new', component: UserEditComponent, data: { userAlreadyExists: false, title: 'New User' } },
    { path: ':id', component: UserDetailsComponent },
    { path: ':id/edit', component: UserEditComponent, data: { userAlreadyExists: true } },
    { path: '**', component: UserNotfoundComponent }
  ] },
];

@NgModule({
  imports: [
    // Always use forChild in child route modules!
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }