import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserProfile } from '../users/user-profile';
import { UserProfileDataService} from '../users/user-profile-data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;
  submitted: boolean = false;
  invalidEmail:boolean = false;
  invalidPassword:boolean = false;
  existingUser = false;
  allUserArray;


  ngOnInit() {
  this.signupForm = this.formBuilder.group({
    fullname :[],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
}
  constructor(private formBuilder: FormBuilder, private userProfilService:UserProfileDataService, private router: Router) {
    let allUsers= this.userProfilService.getUserProfiles();
     allUsers.subscribe(snapshots=>{
      this.allUserArray = snapshots;
    })
  }

  onSubmit() {

    let user = new UserProfile();
    if (this.signupForm.controls.email.value == '' ){
      this.invalidEmail = true;
    }
    if (this.signupForm.controls.password.value==''){
      this.invalidPassword = true;
    }
    if( this.invalidEmail && this.invalidPassword){
      this.router.navigate(['/signup']);
    }else if (this.getUser(this.signupForm.controls.email.value) != null){
        this.existingUser = true;
        this.router.navigate(['/signup']);
    }else{
      localStorage.setItem('fullname', this.signupForm.controls.fullname.value);
      localStorage.setItem('email', this.signupForm.controls.email.value);
      localStorage.setItem( 'password',this.signupForm.controls.password.value);
      this.router.navigate(['/quiz']);
    }

  }

  getUser(email:string):UserProfile|any{
    for(let i = 0; i < this.allUserArray.length; i++){
      if (this.allUserArray[i].email == email){
        return this.allUserArray[i];
      }
    }
  }
}
