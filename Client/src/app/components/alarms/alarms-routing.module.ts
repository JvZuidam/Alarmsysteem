import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmsComponent } from './alarms.component';

const routes: Routes = [
  { path: 'alarms', component: AlarmsComponent },
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
export class AlarmsRoutingModule { }
