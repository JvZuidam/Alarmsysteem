import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  apiUrl: 'https://alarmsysteem-server.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getCameras() {
    return this.http.get('https://alarmsysteem-server.herokuapp.com/camera/Jim')
      .map((response: Response) => {
        console.log(response);
        return response;
      });
  }
}
