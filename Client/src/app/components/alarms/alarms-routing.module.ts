import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmsComponent } from './alarms.component';

/*******************************************************
 * Copyright (C) 2018-2019 Jim van Zuidam 2127317
 *
 * This file is part of ClientSideProgrammingIndividueel.
 *
 * ClientSideProgrammingIndividueel can not be copied and/or distributed without the express
 * permission of Jim van Zuidam
 *******************************************************/

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
