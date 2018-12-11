import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { CameraListComponent} from './camera-list/camera-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {CameraRoutingModule} from './cameras-routing.module';
import { CameraItemComponent } from './camera-item/camera-item.component';
import {CameraDetailsComponent} from './camera-details/camera-details.component';
import {CameraEditComponent} from './camera-edit/camera-edit.component';

@NgModule({
  declarations: [
    CamerasComponent,
    CameraListComponent,
    CameraItemComponent,
    CameraDetailsComponent,
    CameraEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientModule,
    NgbModule,
    CameraRoutingModule   // Order is important, MUST be BEFORE AppRoutingModule!
    // AppRoutingModule  // NO import of AppRoutingModule - would overwrite previous routes!
  ],
  providers: [
  ],
  exports: [
    CamerasComponent
  ]
})
export class CamerasModule { }
