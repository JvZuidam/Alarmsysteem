import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {User} from '../../users/user.model';
import {Camera} from '../camera.model';
import {CamerasService} from '../cameras.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-camera-create',
  templateUrl: './camera-create.component.html',
  styleUrls: ['./camera-create.component.css']
})
export class CameraCreateComponent implements OnInit {

  title: string = "Camera Create";
  user: User;
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
  submitted: boolean;

  constructor(
    private cameraService: CamerasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    console.log('onSubmit');
    console.log(this.camera);
    // Save user via the service
    // Then navigate back to display view (= UserDetails).
    // The display view must then show the new or edited user.
      this.cameraService.createCamera(this.camera, this.user)
        .subscribe(
          (response) => {
            this.camera = response[0];
          },
          (error) => console.warn(error)
        );
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
