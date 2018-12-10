import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'Users ListComponent'
  users: User[];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => console.log('Doe iets met deze error : ' + error)
    );
  }

}
