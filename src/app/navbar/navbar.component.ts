import {Component, EventEmitter, Output} from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  get user(): any {
    return localStorage.getItem('loginUser');
  }
  constructor(private router: Router) {}
  logout(){
    localStorage.removeItem('loginUser');
    this.router.navigate(['/']);
  }
}
