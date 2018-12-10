import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../users.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string;
  // editMode switches between editing existing user or creating a new user.
  // Default is false (= create new user)
  editMode: boolean;
  id: number;
  user: User;
  submitted = false;
  dob;

  nationalities = [
    { country: 'Netherlands', code: 'NL' },
    { country: 'Germany', code: 'DE'},
    { country: 'France', code: 'FR' },
    { country: 'Spain', code: 'ES' },
    { country: 'Canada', code: 'CA' },
    { country: 'United Kingdom', code: 'UK'}
  ]

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit User';
    this.editMode = this.route.snapshot.data['userAlreadyExists'] || false;
    // Get the data statically - changes are not reflected.
    // this.id = +this.route.snapshot.paramMap.get('id');

    if(this.editMode){
      // Subscribe to changes in route params. When the route changes we get updates on route params.
      this.route.params.subscribe((params) => {
        if (params['id']) {
          // Subscribe for available users. Once users are available we get our specific user.
          this.userService.usersAvailable.subscribe(userAvailable => {
            if (userAvailable) {
              const user = this.userService.getUser(+params['id']);
              // make local copy of user - detached from original array
              this.user = new User(JSON.parse(JSON.stringify(user)));
              // local date of birth - for ngbDatePicker
              this.dob = { year: '1980', month: '10', day: '28' };
            }
          })
        }
      });
    } else {
      // Create a new empty user. The required properties are filled 
      // with empty values by the usermodel.
      this.user = new User();
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log('onSubmit');

    // Save user via the service
    // Then navigate back to display view (= UserDetails).
    // The display view must then show the new or edited user.

    console.dir(this.user);
    if(this.user._id) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user).subscribe(
        data => console.log(data)
        // ,
        // error => console.error(error)
      );
    }

    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
