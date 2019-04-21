import { Alarm } from '../alarms/alarm.model';

export class Camera {
  _id: string;
  cameraName: string;
  location: string;
  company: string;
  building: string;
  angle: number;
  user: string;
  alarm: Alarm[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


