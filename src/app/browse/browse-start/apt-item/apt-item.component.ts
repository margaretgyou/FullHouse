import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { SearchResult } from '../../../users/SearchResult'

@Component({
  selector: 'app-apt-item',
  templateUrl: './apt-item.component.html',
  styleUrls: ['./apt-item.component.css']
})
export class AptItemComponent implements OnInit {
  @Input() listing;
  @Output() listingSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.listingSelected.emit();
  }

}
