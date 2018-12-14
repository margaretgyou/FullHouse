export class UserProfile {
  email: string;
  password: string;
  name: string;
  neighbourhood:string
  offerroom: boolean;
  preferedRMgender:string
  preferedRMage:string
  preferedRMbedtime:string
  preferedRMWaketime:string
  preferedRoomPrice:string
  cleanliness:string
  noise:string
  constructor( values: Object = {}){
    Object.assign(this, values);
  }
}
