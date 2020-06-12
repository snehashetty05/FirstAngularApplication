import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email = '';
  password = '';
  isValid = false ;
  location = '';


  constructor(private _location : Location) { }

  ngOnInit() {
  }

  login() {
    if (this.email.trim() == 'admin' && this.password.trim() == 'admin'){
        alert( 'Login Sucessfully');
    }
    else {
      alert( 'Invalid Email and Password');
    }

  }
  Validate() {
    if ( this.email.trim() == '' || this.password.trim() == ''){
      this.isValid = false;
    }
    else {
      this.isValid = true;
    }
  }
  cancel(){
    this._location.back();
  }

}
