import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import {UsersService} from './users.service';
import {Subscription} from 'rxjs';
// import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  subscription: Subscription;
  title = "Users Component";
  users: User[];

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.subscription = this.userService.getUsers()
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => console.warn(error)
      );
  }

}
