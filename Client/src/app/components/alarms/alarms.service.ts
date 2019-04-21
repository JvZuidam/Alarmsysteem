import { Injectable } from '@angular/core';
import { Alarm } from './alarm.model';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from '../users/user.model';
import {Camera} from '../cameras/camera.model';

@Injectable({
  providedIn: 'root'
})
export class AlarmsService {

  alarm: Alarm[];

  constructor(
    private http: HttpClient) {

  }
  public createAlarms(alarm: Alarm, user: string, camera: string) {
    return this.http.post<any>('https://alarmsysteem-server.herokuapp.com/alarm', {
      "username" : user,
      "cameraName" : camera,
      "alarmName" : alarm.title,
      "description" : alarm.description,
      "alarmType" : alarm.alarmType,
      "alarmLevel" : alarm.alarmLevel
    })
  }

  public getAlarms(user: string, camera: string) {
    return this.http.get<any>('https://alarmsysteem-server.herokuapp.com/alarm/Jim/Camera2/5c0f77c1603eb3001649685b')
      .pipe(
        tap(response => console.log(response.results)),
        map(response => response.results.map(data => new User(data)))
      );
  }

  public deleteAlarms() {

  }
}
