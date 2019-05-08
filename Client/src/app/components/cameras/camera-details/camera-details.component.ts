import {Component, OnDestroy, OnInit} from '@angular/core';
import {Camera} from '../camera.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CamerasService} from '../cameras.service';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../auth/services';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css']
})
export class CameraDetailsComponent implements OnInit, OnDestroy {
  showDetails: boolean;
  showEdit: boolean;
  title: string = 'Camera Detail';
  camera: Camera = {
    '_id': '1111',
    'cameraName': 'Loading',
    'location': 'Loading',
    'company': 'Loading',
    'building': 'Loading',
    'angle': 0,
    'user': 'Loading',
    'alarm': []
  };
  cameraName: string;
  subscription: Subscription;
  subscriptionCamera: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cameraService: CamerasService,
  private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    console.log("inside");
    this.subscription = this.route.params.subscribe(params => {
      this.cameraName = params['id'];
      this.subscriptionCamera = this.cameraService.getCamera(this.cameraName)
        .subscribe(
        (response) => {
          this.camera = response[0];
        },
        (error) => console.warn(error)
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionCamera.unsubscribe();
  }

  OnSelectedUpdate() {
    this.showDetails = false;
    this.showEdit = true;
  }

  OnDelete() {
    console.log(this.cameraName);
    this.cameraService.deleteCamera(this.cameraName, this.authenticationService.currentUserValue)
      .subscribe(
        (response) => {
          this.router.navigateByUrl( '/dashboard', {skipLocationChange: true}).then(() =>
            this.router.navigate(['cameras']));
        },
        (error) => console.warn(error)
      );

  }

}
