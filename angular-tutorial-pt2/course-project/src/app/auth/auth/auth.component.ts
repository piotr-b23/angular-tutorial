import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){

    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;


   
    if(this.isLoginMode){
      // to do login
    }
    else {
      this.isLoading = true;
      this.authService.signup(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.error = 'An error occured';
        this.isLoading = false;
      });
    }
    form.reset();
  }

  constructor(private authService: AuthService) { }

}
