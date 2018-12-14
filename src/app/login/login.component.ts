import { Component } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router} from '@angular/router';
import { UserProfile } from '../users/user-profile';
import { Room } from '../rooms/room';
import { UserProfileDataService} from '../users/user-profile-data.service';
import { RoomsDataService} from '../rooms/rooms-data.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userProfilService;
  roomsService;
  public user;
  invalidLogin;

  constructor(private db: AngularFireDatabase, private router: Router) {
      this.userProfilService = new UserProfileDataService(db);
      this.roomsService = new RoomsDataService(db);
      this.user = new UserProfile();

  }
  login(email:string, password:string){
    let allUsers= this.userProfilService.getUserProfiles();
    this.user = allUsers.subscribe(snapshots=>{
      snapshots.forEach(snapshot =>{
        if (snapshot.email == email && snapshot.password == password){
          this.user = snapshot;
          localStorage.setItem('loginUser', this.user.email );
          this.router.navigate(['/browse']);

        }else{
          this.invalidLogin=true;
        }
      })

    })
  }
}
