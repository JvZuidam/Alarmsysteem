import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs-compat/add/operator/map';
import {Camera} from './camera.model';
import {catchError, map, tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {User} from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  cameras: Camera[];

  cameraAvailable = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {

  }
  //TODO: find a way to make user dynamic (Since it's now always Jim)
  public createCamera(camera: Camera) {
    console.log('createCamera');
    console.log(camera);
    return this.http.post('https://alarmsysteem-server.herokuapp.com/camera/', {
      "username" : camera.user,
      "cameraName" : camera.cameraName,
      "location" : camera.location,
      "company" : camera.company,
      "building": camera.building,
      "angle" : camera.angle
    })
      // .pipe(
      //   // catchError(this.handleError), // then handle the error
      //   tap( // Log the result or error
      //     data => console.log(data)
      //     ,
      //     error => console.error(error)
      //   )
      // );
  }

  public getCameras() {
    console.log('getCameras');
    return this.http.get<any>('https://alarmsysteem-server.herokuapp.com/camera/Jim')
      .pipe(
      tap(response => console.log(response.results)),
      map(response => response.results.map(data => new Camera(data)))
      );
  }

  public getCamera(cameraName: string) {
    console.log('getCamera');
    return this.http.get<any>('https://alarmsysteem-server.herokuapp.com/camera/Jim/' + cameraName)
      .pipe(
        tap(response => console.log(response.results)),
        map(response => response.results.map(data => new Camera(data)))
      );
  }

  public updateCamera(camera: Camera, oldCameraName: string) {
    console.log(camera);
    console.log(oldCameraName);
    console.log('updateCamera');
    return this.http.put('https://alarmsysteem-server.herokuapp.com/camera/', {
      "userName" : "Jim",
      "cameraName" : oldCameraName,
      "newCameraName" : camera.cameraName,
      "newLocation" : camera.location,
      "newCompany" : camera.company,
      "newBuilding": camera.building,
      "newAngle" : camera.angle
    })
      // .pipe(
      //   tap(response => console.log(response.results)),
      //   map(response => response.results.map(data => new Camera(data)))
      // );
  }

  public deleteCamera(cameraName: string) {
    return this.http.delete('https://alarmsysteem-server.herokuapp.com/camera/Jim/' + cameraName)
  }
}
