import { Component, OnInit } from '@angular/core';
import {UserSignupService} from '../services/user-signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private userSignUpService: UserSignupService, private router : Router) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.userSignUpService.form.controls;

  ngOnInit() {

  }

  onSubmit(){
    this.submitted = true;
    if(this.userSignUpService.form.valid){
      this.userSignUpService.addNewUser(this.userSignUpService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
        this.router.navigate(['']);
      }, 1000);
      this.submitted = false;
      this.userSignUpService.form.reset();
    }
  }
}
