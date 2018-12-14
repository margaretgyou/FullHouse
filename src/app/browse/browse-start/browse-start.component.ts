import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Room } from '../../rooms/room';
import { UserProfile } from '../../users/user-profile';
import { SearchResult } from '../../users/search-result';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfileDataService} from '../../users/user-profile-data.service';
import { RoomsDataService} from '../../rooms/rooms-data.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-browse-start',
  templateUrl: './browse-start.component.html',
  styleUrls: ['./browse-start.component.css', './animate.css']
})
export class BrowseStartComponent implements OnInit {
  @Output() listingWasSelected = new EventEmitter<Room>();
  public show2:boolean = false;
  public show1:boolean = false;
  public buttonName:any = 'Show';
  listings: Array<SearchResult>;
  roommates: Array<SearchResult>;
  userProfilService;
  roomsService;
  user;
  roommate;
  allUsers;
  allRooms: Array<Room>;
  searchResultRoomMatesArray: Array<SearchResult>;
  login;

  constructor(private db: AngularFireDatabase) {
      this.userProfilService = new UserProfileDataService(db);
      this.roomsService = new RoomsDataService(db);
      this.user = new UserProfile();
      this.listings = [];
      this.searchResultRoomMatesArray= [];
      this.roommate = new UserProfile;
      let rooms = this.roomsService.getRooms();
      rooms.subscribe(snapshots=>{
        this.allRooms = snapshots;
      })
      // load all users
      let users= this.userProfilService.getUserProfiles();
      // process room provider match
      users.subscribe(snapshots=>{
        this.allUsers = snapshots;
        this.user = this.getUser( localStorage.getItem('loginUser'));
      });

  }
  callAll1() {
    this.findListings();
    this.toggle1();
  }
  callAll2() {
    this.findRoomMates();
    this.toggle2();
  }
  toggle1() {
    this.show1 = !this.show1;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show1)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggle2() {
    this.show2 = !this.show2;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show2)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  ngOnInit() {
  }
  onListingSelected(listing: Room) {
    this.listingWasSelected.emit(listing);
  }


  // retreive users who offer rooms within your pricerange and city and match at least 1 of your preferences
  findListings(){
      // Loop through all room providers
      // Find out seaerch result according to matching algorithm
      let score = 0;
      this.listings =[];
      for (let i = 0; i < this.allRooms.length; i++) {
        let roomProvider = this.getUser(this.allRooms[i].useremail);
        if ( this.user.email != roomProvider.email){
          if(this.user.neighbourhood == roomProvider.neighbourhood ){
            score = score + 2;
          }
          if (this.user.preferedRMage == roomProvider.preferedRMage){
            score ++;
          }
          if ( (this.user.preferedRMgender == roomProvider.preferedRMgender)|| (this.user.preferedRMgender=='Any')){
            score ++;
          }
          if ( this.user.preferedRMbedtime == roomProvider.preferedRMbedtime){
            score ++;
          }
          if(roomProvider.preferedRoomPrice == roomProvider.preferedRoomPrice){
            // if the room provider's has rooms match the preferred pricerange, get 2 points
            score = score + 2;
          }
          if(this.user.preferedRMWaketime == this.user.preferedRMWaketime){
            score ++;
          }
          if(this.user.cleanliness == this.user.cleanliness){
            score ++;
          }
          if(this.user.noise == this.user.noise){
            score ++;
          }
          if(score > 0){
              let searchResult = new SearchResult();
              searchResult.room = this.allRooms[i];
              searchResult.matchscore = score;
              this.listings.push(searchResult);
              score = 0;
          }
        }
     }
      // Sort the search result array by matchscore
      this.listings = this.listings.sort(
          function(a,b){return b.matchscore - a.matchscore});

  }


  // retreive users who are looking for rooms and match at least 1 of your preferences
  findRoomMates(){

      // Loop through all room  finders
      // Find out seaerch result according to matching algorithm
      let score = 0;

      this.roommates=[];
      for (let i = 0; i < this.allUsers.length; i++) {
        if(this.allUsers[i].offerroom  == false && this.allUsers[i].email != this.user.email ){
          if(this.user.neighbourhood == this.allUsers[i].neighbourhood ){
            score = score + 2;
          }
          if (this.user.preferedRMage == this.allUsers[i].preferedRMage){
            score ++;
          }
          if ( (this.user.preferedRMgender == this.allUsers[i].preferedRMgender)|| (this.user.preferedRMgender=='Any')){
            score ++;
          }
          if ( this.user.preferedRMbedtime == this.allUsers[i].preferedRMbedtime){
            score ++;
          }
          if(this.allUsers[i].preferedRoomPrice == this.user.preferedRoomPrice){
            // if the room provider's has rooms match the preferred pricerange, get 2 points
            score = score + 2;
          }
          if(this.user.preferedRMWaketime == this.allUsers[i].preferedRMWaketime){
            score ++;
          }
          if(this.user.cleanliness == this.allUsers[i].cleanliness){
            score ++;
          }
          if(this.user.noise == this.allUsers[i].noise){
            score ++;
          }
          if(score > 0){
            let searchResult = new SearchResult();
            searchResult.roommate = this.allUsers[i];
            searchResult.matchscore = score;
            this.roommates.push(searchResult);
          }
          score = 0;
        }
      }
      // Sort the search result array by matchscore
      this.roommates = this.roommates.sort(
          function(a,b){return b.matchscore - a.matchscore});
  }

  getUser(email:string):UserProfile|any{
    for(let i = 0; i < this.allUsers.length; i++){
      if (this.allUsers[i].email == email){
        return this.allUsers[i];
      }
    }
  }

  getRooms(email:string): Array<Room> | any{
    let roomsArray = new Array<Room>();
    for (let i = 0; i < this.allRooms.length; i++) {
      if (this.allRooms[i].useremail == email ){
        roomsArray.push(this.allRooms[i]);
      }
    }
    return roomsArray;
  }

  displayRoommate(matcheremail:string){
    let allUsers= this.userProfilService.getUserProfiles();
    this.user = allUsers.subscribe(snapshots=>{
      snapshots.forEach(snapshot =>{
        if (snapshot.email == matcheremail ){
          this.roommate = snapshot;
        }
      });
    });
  }

}
