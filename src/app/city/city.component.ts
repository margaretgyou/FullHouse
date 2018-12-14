import { Component, OnInit } from '@angular/core';
import {City} from '../shared/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  citys: City[] = [
    new City('Montreal', 2),
    new City('Toronto', 1)
  ];
  constructor() { }

  ngOnInit() {
  }

}
