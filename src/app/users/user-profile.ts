export class UserProfile {
  email: string;
  password: string;
  age: string;
  gender: string;
  name: string;
  offerroom: boolean;
  preferedRMgender:string
  preferedRMage:string
  preferedRMbedtime:string
  preferedRMWaketime:string
  preferedRoomPrice:string

  constructor( values: Object = {}){
    Object.assign(this, values);
  }
}
