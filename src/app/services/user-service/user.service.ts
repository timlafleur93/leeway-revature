import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList : AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase)
  {
    this.getUsers();
  }

  public form = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('',  Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl(''),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
  });

  getUsers() {
    this.userList = this.firebase.list('users');
    return this.userList.snapshotChanges();
  }

  addNewUser(email){
    this.userList.push({
      firstName : '',
      lastName : '',
      email : email,
      city:  '',
      state: ''
    });
  }

  updateUserInfo(user){
    this.userList.update(user.$key,
      {
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email,
        city: user.city,
        state: user.state,
      }
    );
  }
}
