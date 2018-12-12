import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs-compat/add/operator/map';
import {Camera} from './camera.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  apiUrl: 'https://alarmsysteem-server.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getCameras() {
    return this.http.get<any>('https://alarmsysteem-server.herokuapp.com/camera/Jim')
      .pipe(
      tap(response => console.log(response.results)),
      map(response => response.results.map(data => new Camera(data)))
      );
  }
}
