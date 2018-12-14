import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  optionTitle = 'Need someone to move in?';
  buttonStatus = 'list';
  buttonText = 'LIST YOUR ROOM';
  l1title = 'Post your room.';
  l2title = 'Get verified.';
  l3title = 'Review and connect with applicants.';
  l4title = 'Celebrate! A full house!';
  routertext = '';
  getColour() {
    return this.buttonStatus === 'list' ? 'lightseagreen' : 'dodgerblue';
  }
  constructor() {
  }

  ngOnInit() {
  }
  onList(){
    this.buttonStatus = 'list';
    this.optionTitle = 'Need someone to move in?';
    this.buttonText = 'LIST YOUR ROOM';
    this.l1title = 'Post your room.';
    this.l2title = 'Get verified.';
    this.l3title = 'Review and connect with applicants.';
    this.l4title = 'Celebrate! A full house!';
    if(localStorage.getItem('loginUser')){
      this.routertext = '/postlisting';
    }else{
      this.routertext = '/login';
    }

  }
  onBrowse(){
    this.buttonStatus = 'browse';
    this.optionTitle = 'Looking for a new room?';
    this.buttonText = 'BROWSE ROOMS';
    this.l1title = 'Get verified.';
    this.l2title = 'Browse rooms.';
    this.l3title = 'Chat and apply to a listing.';
    this.l4title = 'Move in! A full house!';
    if(localStorage.getItem('loginUser')){
      this.routertext = '/browse';
    }else{
      this.routertext = '/login';
    }
  }

}
