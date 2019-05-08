import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User[]

  constructor(
    private http: HttpClient) {
  }

  public createUser(user: User) {
    return this.http.post('https://alarmsysteem-server.herokuapp.com/camera/', {
      "name" : user.results.name,
      "email" : user.results.email,
      "password" : user.results.password
    })
  }

  public getUsers() {
    return this.http.get<any>('https://alarmsysteem-server.herokuapp.com/user')
      .pipe(
        tap(response => console.log(response.results)),
        map(response => response.results.map(data => new User(data)))
      );
  }

  public updateUser() {

  }

  public deleteUser() {

  }
}
