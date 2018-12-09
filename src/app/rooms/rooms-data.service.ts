import { Injectable } from '@angular/core';
import { Room} from './room';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList,AngularFireObject } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class RoomsDataService {

    private basePath='/rooms';
    rooms: AngularFireList<Room> = null;

    constructor(private db: AngularFireDatabase) {
      this.rooms = this.db.list(this.basePath);
    }
    addRoom(room: Room){
      this.rooms.push(room);
    }

    updateRoom(email: string, room: Room){
      this.rooms.valueChanges();
    }
    getRooms(){
      this.rooms = this.db.list(this.basePath);
      return this.rooms.valueChanges();
    }
}
