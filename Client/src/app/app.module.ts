import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import {UsersModule} from './components/users/users.module';
import {CamerasModule} from './components/cameras/cameras.module';
import {AlarmsModule} from './components/alarms/alarms.module';

/*******************************************************
 * Copyright (C) 2018-2019 Jim van Zuidam 2127317
 *
 * This file is part of ClientSideProgrammingIndividueel.
 *
 * ClientSideProgrammingIndividueel can not be copied and/or distributed without the express
 * permission of Jim van Zuidam
 *******************************************************/

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    UsersModule,
    CamerasModule,
    AlarmsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
