import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-roomate-item',
  templateUrl: './roomate-item.component.html',
  styleUrls: ['./roomate-item.component.css']
})
export class RoomateItemComponent implements OnInit {
  @Input() rms;
  constructor() { }

  ngOnInit() {
  }

}
