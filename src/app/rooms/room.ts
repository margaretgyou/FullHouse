export class Room {
  useremail: string;
  roomNo:string;
  address: string;
  description: string;
  pricerange: string;

  constructor( values: Object = {}){
    Object.assign(this, values);
  }
}
