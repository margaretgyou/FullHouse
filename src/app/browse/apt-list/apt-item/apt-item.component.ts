import { Component, Input, OnInit} from '@angular/core';
import { Room } from '../../../rooms/room';

@Component({
  selector: 'app-apt-item',
  templateUrl: './apt-item.component.html',
  styleUrls: ['./apt-item.component.css']
})
export class AptItemComponent implements OnInit {
  @Input() listing: Room;
  @Input() index: number;
  ngOnInit() {
  }
}
