import {Component, OnDestroy, OnInit} from '@angular/core';
import {Camera} from '../camera.model';
import {CamerasService} from '../cameras.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../auth/services';

@Component({
  selector: 'app-camera-edit',
  templateUrl: './camera-edit.component.html',
  styleUrls: ['./camera-edit.component.css']
})
export class CameraEditComponent implements OnInit, OnDestroy {

  title: string = "Camera Edit";
  cameraName: string;
  camera: Camera;
  submitted = false;
  subscription: Subscription;
  subscriptionCamera: Subscription;

  constructor(
    private cameraService: CamerasService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    console.log("inside2");
    this.subscription = this.route.params.subscribe(params => {
      this.cameraName = params['id'];
      this.subscriptionCamera = this.cameraService.getCamera(this.cameraName)
        .subscribe(
          (response) => {
            this.camera = response[0];
            console.log(this.camera);
          },
          (error) => console.warn(error)
        );
    });
  }
  //TODO: make user dynamic (It's now always Jim)
  onSubmit() {
    this.submitted = true;
    console.log('onSubmit');

    // Save user via the service
    // Then navigate back to display view (= UserDetails).
    // The display view must then show the new or edited user.

    console.dir(this.camera);
    if(this.camera.cameraName) {
      this.cameraService.updateCamera(this.camera, this.cameraName, this.authenticationService.currentUserValue)
        .subscribe(
          (response) => {
            this.camera = response[0];
          },
          (error) => console.warn(error)
        );
    }

    this.router.navigate(['..'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionCamera.unsubscribe();
  }

}
