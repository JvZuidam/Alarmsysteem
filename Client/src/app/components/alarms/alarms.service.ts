import { Injectable } from '@angular/core';
import { Alarm } from './alarm.model';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class AlarmsService {

  constructor(
    private http: HttpClient) {

  }
  public createAlarms() {

  }

  public getAlarms() {
    return this.http.get<any>('https://alarmsysteem-server.herokuapp.com/alarm/Jim/Camera2/5c0f77c1603eb3001649685b')
      .pipe(
        tap(response => console.log(response.results)),
        map(response => response.results.map(data => new User(data)))
      );
  }

  public updateAlarms() {

  }

  public deleteAlarms() {

  }
}
