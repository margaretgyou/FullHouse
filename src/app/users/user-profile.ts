export class UserProfile {
  key:string
  email: string;
  password: string;
  age: string;
  gender: string;
  name: string;
  city:string
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
