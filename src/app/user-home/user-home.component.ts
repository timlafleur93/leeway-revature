import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service/auth.service';
import {UserService} from '../services/user-service/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  userEmail : string;
  currentUser : User;


  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.userService.form.controls;

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(()=>{
      this.userEmail = this.authService.userEmail;
      this.getCurrentUser();
    });
  }

  getCurrentUser(){
    let temp : User[];
    this.userService.getUsers().subscribe(
      list => {
        temp = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        temp.forEach((i)=> {
          if(i.email.toLowerCase() == this.userEmail.toLowerCase()){
            this.currentUser = i;
          }
        })
      });
  }

  onSubmit() {
    this.submitted = true;
    this.showSuccessMessage = true;
    this.currentUser.firstName = this.userService.form.value.firstName;
    this.currentUser.lastName = this.userService.form.value.lastName;
    this.currentUser.city = this.userService.form.value.city;
    this.currentUser.state = this.userService.form.value.state;
    this.userService.updateUserInfo(this.currentUser);
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 1000);
    this.submitted = false;
  }
}
