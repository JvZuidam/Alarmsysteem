import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CamerasService} from '../cameras.service';
import {Camera} from '../camera.model';
import {User} from '../../users/user.model';

import { AuthenticationService } from '../../../auth/services';


@Component({

  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.css']
})
export class CameraListComponent implements OnInit, OnDestroy {
  showDetails: boolean;
  showEdit: boolean;
  title: "CameraListComponent";
  cameras: Camera[];
  user: User;
  subscription: Subscription;

  constructor(
    private cameraService: CamerasService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log(this.authenticationService.currentUserValue);
    this.subscription = this.cameraService.getCameras(this.authenticationService.currentUserValue)
      .subscribe(
        (response) => {
         this.cameras = response;
        },
        (error) => console.warn(error)
      );
  }

  ngOnDestroy(): void {
  }

  OnSelected() {
    this.showDetails = true;
  }
}
