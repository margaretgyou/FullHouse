export class Room {
  useremail: string;
  roomid:string
  title:string
  price: string;
  address: string;
  city:string;
  description: string;

  constructor( values: Object = {}){
    Object.assign(this, values);
  }
}
