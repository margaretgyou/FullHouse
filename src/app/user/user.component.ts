import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User = new User('Margaret', 'margo@email.com', 'Montreal', 'i like cheese');
  constructor() { }

  ngOnInit() {
  }

}
