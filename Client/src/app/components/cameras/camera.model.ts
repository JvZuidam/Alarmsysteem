import { Alarm } from '../alarms/alarm.model';

export class Camera {
  _id: string;
  cameraName: string;
  location: string;
  user: string;
  alarm: Alarm[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


