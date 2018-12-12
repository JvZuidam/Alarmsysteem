import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CamerasService} from '../cameras.service';
import {Camera} from '../camera.model';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.css']
})
export class CameraListComponent implements OnInit, OnDestroy {
  title: "CameraListComponent";
  camera: Camera[];
  subscription: Subscription;

  constructor(private cameraService: CamerasService) { }

  ngOnInit() {
    this.subscription = this.cameraService.getCameras()
      .subscribe(
        (response) => {
         this.camera = response;
        },
        (error) => console.warn(error)
      );
  }

  ngOnDestroy(): void {
  }

}
