import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraNotfoundComponent } from './camera-notfound.component';

describe('CameraNotfoundComponent', () => {
  let component: CameraNotfoundComponent;
  let fixture: ComponentFixture<CameraNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
