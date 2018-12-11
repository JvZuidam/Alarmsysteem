import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {CameraRoutingModule} from './cameras-routing.module';

@NgModule({
  declarations: [
    CamerasComponent,
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
