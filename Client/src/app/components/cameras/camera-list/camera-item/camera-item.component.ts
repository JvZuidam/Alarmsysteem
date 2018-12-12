import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-camera-item]',
  templateUrl: './camera-item.component.html',
  styleUrls: ['./camera-item.component.css']
})
export class CameraItemComponent implements OnInit {

  @Input() selectedCamera;
  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
