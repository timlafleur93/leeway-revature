import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth-service/auth.service';
import {UserService} from './user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  constructor(private firebase: AngularFireDatabase, private authService: AuthService) { }

  public form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  });

  addNewUser(user){
    this.authService.signup(user.email, user.password);
  }
}
