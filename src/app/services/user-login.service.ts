import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth-service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private authService: AuthService) { }


  public form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('',Validators.required),
  });
  formControls = this.form.controls;

  login(){
    if(!this.formControls.email.errors || !this.formControls.password.errors ){
      this.authService.login(this.formControls.email.value, this.formControls.password.value);
      this.form.reset();
    } else {
      console.log('there are errors in the email or password for login');
    }
  }

}
