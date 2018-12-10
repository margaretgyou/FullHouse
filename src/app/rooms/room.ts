export class Room {

  useremail: string;
  key:string;
  price: string;
  address: string;
  city:string;
  description: string;


  constructor( values: Object = {}){
    Object.assign(this, values);
  }
}
