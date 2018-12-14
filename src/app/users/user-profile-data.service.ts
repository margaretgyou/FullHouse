import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList,AngularFireObject } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class UserProfileDataService {
  private basePath='/userprofile';
  users: AngularFireList<UserProfile> = null;
  user: UserProfile;
  constructor(private db: AngularFireDatabase) {
    this.users = this.db.list(this.basePath);
  }

  addUserProfile(user: UserProfile):UserProfileDataService{
    this.users.push(user);
    return this;
  }

  updateUserProfile(key: string, user1: UserProfile){
    this.users.update(key, user1);
  }
  getUserProfiles(){
    this.users = this.db.list(this.basePath);
    return this.users.valueChanges();
  }
}
