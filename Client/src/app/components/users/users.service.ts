import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get<any>('https://alarmsysteem-server.herokuapp.com/user')
      .pipe(
        tap(response => console.log(response.results)),
        map(response => response.results.map(data => new User(data)))
      );
  }
}
