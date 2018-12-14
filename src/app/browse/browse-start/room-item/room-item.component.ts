import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { SearchResult } from '../../../users/SearchResult'

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() listing;
  @Output() listingSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.listingSelected.emit();
  }

}
