import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamerasComponent } from './cameras.component';
import {CameraListComponent} from './camera-list/camera-list.component';
import {CameraEditComponent} from './camera-edit/camera-edit.component';
import {CameraDetailsComponent} from './camera-details/camera-details.component';
import {CameraCreateComponent} from './camera-create/camera-create.component';

/*******************************************************
 * Copyright (C) 2018-2019 Jim van Zuidam 2127317
 *
 * This file is part of ClientSideProgrammingIndividueel.
 *
 * ClientSideProgrammingIndividueel can not be copied and/or distributed without the express
 * permission of Jim van Zuidam
 *******************************************************/

const routes: Routes = [
  { path: 'cameras/new', component: CameraCreateComponent},
  { path: 'cameras/:id', component: CamerasComponent },
  { path: 'cameras/:id/edit', component: CameraEditComponent },
  { path: 'cameras', component: CamerasComponent },

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
