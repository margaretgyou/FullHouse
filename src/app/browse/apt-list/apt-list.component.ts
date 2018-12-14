import {Component, OnInit,EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Room } from '../../rooms/room';
import { UserProfile } from '../../users/user-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfileDataService} from '../../users/user-profile-data.service';
import { RoomsDataService} from '../../rooms/rooms-data.service';
import { AngularFireList } from 'angularfire2/database';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-apt-list',
  templateUrl: './apt-list.component.html',
  styleUrls: ['./apt-list.component.css']
})

export class AptListComponent implements OnInit {
  listings;
  userProfilService;
  roomsService;
  user;
  newListForm:FormGroup;
  ngOnInit() {
    this.newListForm = this.formBuilder.group({
      title:[],description:[], address:[], price:[]
    });
  }
  constructor(private db: AngularFireDatabase, private router: Router,
              private route: ActivatedRoute,private formBuilder: FormBuilder, ) {
    this.userProfilService = new UserProfileDataService(db);
    this.roomsService = new RoomsDataService(db);
    let useremail = localStorage.getItem('loginUser');
    this.getMyRooms(useremail);
  }


  onNewListing() {
    //this.router.navigate(['new'], {relativeTo: this.route});
  }

  getMyRooms(email:String){
    let rooms = this.roomsService.getRooms();
    rooms.subscribe(snapshots=>{
      this.listings = [];
      snapshots.forEach(snapshot =>{
        if (snapshot.useremail == email ){
          this.listings.push(snapshot);
        }
      });
    });
  }
  onSubmit(){
    let room = new Room();
    room.useremail = localStorage.getItem('loginUser');
    room.title = this.newListForm.controls.title.value;
    room.description = this.newListForm.controls.description.value;
    room.address = this.newListForm.controls.address.value;
    room.price = this.newListForm.controls.price.value;
    this.roomsService.addRoom(room);
  }
}
