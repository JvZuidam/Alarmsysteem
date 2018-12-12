import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamerasComponent } from './cameras.component';
import {CameraListComponent} from './camera-list/camera-list.component';
import {CameraEditComponent} from './camera-edit/camera-edit.component';
import {CameraDetailsComponent} from './camera-details/camera-details.component';
import {CameraNotfoundComponent} from './camera-notfound/camera-notfound.component';

const routes: Routes = [
  { path: 'cameras/:id', component: CamerasComponent },
  { path: 'cameras/:id/edit', component: CameraEditComponent },
  { path: 'cameras', component: CamerasComponent, children: [
      { path: '', component: CameraDetailsComponent },
      { path: 'new', component: CameraEditComponent, data: { userAlreadyExists: false, title: 'New Camera' } },

      { path: '**', component: CameraNotfoundComponent }
    ] },

  { path: 'cameras/list', component: CameraListComponent },
  { path: 'cameras/list/new', component: CameraEditComponent, data: {
      userAlreadyExists : false,
      title: 'New Camera'
    } },
  { path: 'cameras/list/:id', component: CameraDetailsComponent },
  { path: 'cameras/list/:id/edit', component: CameraEditComponent, data: { userAlreadyExists: true, title: 'Edit Camera' } },

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
export class CameraRoutingModule { }
