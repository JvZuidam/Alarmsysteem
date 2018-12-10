import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() selectedUser;
  @Input() index;

  constructor() { 
  }
  
  ngOnInit() {
    // console.log(`${this.selectedUser.name.first}`);
  }

}
