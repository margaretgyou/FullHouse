import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserProfile } from '../users/user-profile';
import { UserProfileDataService} from '../users/user-profile-data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizForm: FormGroup;

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      offerRoom:[], pricerange:[],neighbourhood:[],age:[],
      gender:[],bedtime:[],waketime:[],cleanliness:[],noise:[]
    });
  }
  constructor(private formBuilder: FormBuilder, private userProfilService:UserProfileDataService, private router: Router) {

  }
  onSubmit(){
    let user = new UserProfile();

    user.email = localStorage.getItem('email');
    user.password = localStorage.getItem('password');
    user.name = localStorage.getItem('fullname');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('fullname');
    if ( this.quizForm.controls.offerRoom.value == 'true'){
      user.offerroom = true;
    }else{
      user.offerroom = false;
    }

    user.preferedRMage = this.quizForm.controls.age.value;
    user.preferedRMgender = this.quizForm.controls.gender.value;
    user.preferedRMbedtime = this.quizForm.controls.bedtime.value;
    user.preferedRMWaketime = this.quizForm.controls.waketime.value;
    user.preferedRoomPrice = this.quizForm.controls.pricerange.value;
    user.noise = this.quizForm.controls.noise.value;
    user.cleanliness = this.quizForm.controls.cleanliness.value;
    user.neighbourhood = this.quizForm.controls.neighbourhood.value;

    this.userProfilService.addUserProfile(user);
    localStorage.setItem('loginUser', user.email );
    this.router.navigate(['/browse']);

  }
}
