import { Component } from '@angular/core';
import { UserProfile } from './users/user-profile';
import { Room } from './rooms/room';
import { SearchResult } from './users/search-result';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfileDataService} from './users/user-profile-data.service';
import { RoomsDataService} from './rooms/rooms-data.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Full-House';
  userProfilService;
  roomsService
  user;
  room;
  searchResultRoomProviderArray: Array<SearchResult>;
  searchResultRoomMatesArray: Array<SearchResult>;


  constructor(private db: AngularFireDatabase) {
      this.userProfilService = new UserProfileDataService(db);
      this.roomsService = new RoomsDataService(db);
      this.user = new UserProfile();
      this.searchResultRoomProviderArray = [];
      this.searchResultRoomMatesArray= [];
  }

  login(email:string, password:string){
    let allUsers= this.userProfilService.getUserProfiles();
    allUsers.subscribe(snapshots=>{
      snapshots.forEach(snapshot =>{
        if (snapshot.email == email && snapshot.password == password){
          this.user = snapshot;
        }
      })
    })
  }

  logout(){
    this.user = new UserProfile();
    this.searchResultRoomProviderArray = [];
    this.searchResultRoomMatesArray= [];
  }

  // retreive users who offer rooms within your pricerange and match at least 1 of your preferences
  findRoomProviders(){
    // load all users
    let allUsers= this.userProfilService.getUserProfiles();

    // process room provider match
    allUsers.subscribe(snapshots=>{

      // Filter users who provide rooms
      let roomProviderArray = [];
      snapshots.forEach(snapshot =>{
        if (snapshot.offerroom ){
          roomProviderArray.push(snapshot);
        }
      })

      // Loop through all room providers
      // Find out seaerch result according to matching algorithm
      let score = 0;
      this.searchResultRoomProviderArray =[];
      for (let i = 0; i < roomProviderArray.length; i++) {
        if (this.user.preferedRMage == roomProviderArray[i].preferedRMage){
          score ++;
        }
        if ( this.user.preferedRMgender == roomProviderArray[i].preferedRMgender){
            score ++;
        }
        if ( this.user.preferedRMbedtime == roomProviderArray[i].preferedRMbedtime){
          score ++;
        }
        let searchResult = new SearchResult();
        searchResult.matcheremail = roomProviderArray[i].email;
        searchResult.matchscore = score;
        this.searchResultRoomProviderArray.push(searchResult);
        score = 0;
      }
    })
  }
  // retreive users who are looking for rooms and match at least 1 of your preferences
  findRoomMates(){
    // load all users
    let allUsers= this.userProfilService.getUserProfiles();

    // process room finder match
    allUsers.subscribe(snapshots=>{
      // Filter users who look for rooms
      let roomFinderArray = [];
      snapshots.forEach(snapshot =>{
        if ( !snapshot.offerroom ){
          roomFinderArray.push(snapshot);
        }
      })
      // Loop through all room  finders
      // Find out seaerch result according to matching algorithm
      let score = 0;
      this.searchResultRoomMatesArray =[];
      for (let i = 0; i < roomFinderArray.length; i++) {
        if (this.user.preferedRMage == roomFinderArray[i].preferedRMage){
          score ++;
        }
        if ( this.user.preferedRMgender == roomFinderArray[i].preferedRMgender){
            score ++;
        }
        if ( this.user.preferedRMbedtime == roomFinderArray[i].preferedRMbedtime){
            score ++;
        }
        let searchResult = new SearchResult();
        searchResult.matcheremail = roomFinderArray[i].email;
        searchResult.matchscore = score;
        if(score > 0){
            this.searchResultRoomMatesArray.push(searchResult);
        }
        score = 0;
      }
    })
  }
  addRoom(address:string, roomNo: string, description: string, pricerange: string){
    let room = new Room();
    room.roomNo = roomNo;
    room.useremail = this.user.email;
    room.address = address;
    room.description = description;
    room.pricerange = pricerange;

  }

  testAddUserProfile(){
      this.user = new UserProfile();
      this.user.email = 'amber@md.com' ;
      this.user.password = '123445';
      this.user.age = '25';
      this.user.gender = 'F';
      this.user.name = 'Amber';
      this.user.offerroom = true;
      this.user.preferedRMage = '25';
      this.user.preferedRMgender ='F';
      this.user.preferedRMbedtime = '24:00';
      this.userProfilService.addUserProfile(this.user);

  }
}
