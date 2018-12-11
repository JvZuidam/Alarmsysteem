import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {AlarmsRoutingModule} from './alarms-routing.module';
import {AlarmsComponent} from './alarms.component';
import {AlarmListComponent} from './alarm-list/alarm-list.component';
import {AlarmEditComponent} from './alarm-edit/alarm-edit.component';
import {AlarmDetailsComponent} from './alarm-details/alarm-details.component';

@NgModule({
  declarations: [
    AlarmsComponent,
    AlarmListComponent,
    AlarmEditComponent,
    AlarmDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientModule,
    NgbModule,
    AlarmsRoutingModule   // Order is important, MUST be BEFORE AppRoutingModule!
    // AppRoutingModule  // NO import of AppRoutingModule - would overwrite previous routes!
  ],
  providers: [
  ],
  exports: [
    AlarmsComponent
  ]
})
export class AlarmsModule { }
