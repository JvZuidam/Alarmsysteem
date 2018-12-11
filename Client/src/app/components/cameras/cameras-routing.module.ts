import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamerasComponent } from './cameras.component';

const routes: Routes = [
  { path: 'cameras', component: CamerasComponent },
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
