import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {User} from 'firebase';
import {UserService} from '../user-service/user.service';
import Auth = firebase.auth.Auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Observable<firebase.User>;
  auth : Auth;
  currentUser : User;
  userEmail = '';


  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService,
    ) {
    this.user = firebaseAuth.authState;
    this.auth = firebase.auth();
    this.auth.setPersistence('session');

    this.auth.onAuthStateChanged((user) => {
      this.handleAuthStateChange(user);
    });
  }

  handleAuthStateChange(user){
    if (user) {
      console.log('user is logged in');
      this.setCurrentUser();
    } else {
      console.log('user is logged out');
      this.logout();
    }
  }
  setCurrentUser(){
    this.currentUser = this.firebaseAuth.auth.currentUser;
    if(this.currentUser)
      this.userEmail = this.currentUser.email;
  }

  signup(email: string, password: string){
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.userService.addNewUser(email);
        this.logout();
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.setCurrentUser();
        this.router.navigate(['/home']);
        console.log('Nice, it worked!');
      })
      .catch(err => {
        alert('email or password incorrect');
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    if(this.firebaseAuth.auth.currentUser){
      this.firebaseAuth
        .auth
        .signOut();
      this.userEmail = '';
    }

  }

}
