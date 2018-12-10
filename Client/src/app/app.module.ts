import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersModule } from './components/users/users.module';
import { CamerasComponent } from './components/cameras/cameras.component';
import { CameraDetailsComponent } from './components/cameras/camera-details/camera-details.component';
import { CameraEditComponent } from './components/cameras/camera-edit/camera-edit.component';
import { CameraListComponent } from './components/cameras/camera-list/camera-list.component';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { AlarmDetailsComponent } from './components/alarms/alarm-details/alarm-details.component';
import { AlarmEditComponent } from './components/alarms/alarm-edit/alarm-edit.component';
import { AlarmListComponent } from './components/alarms/alarm-list/alarm-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CamerasComponent,
    CameraDetailsComponent,
    CameraEditComponent,
    CameraListComponent,
    AlarmsComponent,
    AlarmDetailsComponent,
    AlarmEditComponent,
    AlarmListComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
