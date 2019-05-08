export class User {
  results: {
    _id: string;
    name: string;
    email: string;
    password: string;
    token?: string;
  };


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
