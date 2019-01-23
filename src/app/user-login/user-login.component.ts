import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userLoginService: UserLoginService) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.userLoginService.formControls;

  ngOnInit() {
  }

  login(){
    this.userLoginService.login();
  }

}
