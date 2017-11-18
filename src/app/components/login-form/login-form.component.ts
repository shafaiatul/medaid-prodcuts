import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MzToastService } from 'ng2-materialize';
import { UserService } from './../../services/user.service';

import { environment } from './../../../environments/environment.prod';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {
  username: any;
  password: any;
  user: any = {
    username: '',
    password: ''
  };
  constructor(
    private router: Router,
    private toastService: MzToastService,
    private userService: UserService) { }

  ngOnInit() {
  }

  // Show  Login Success Toast message
  showLoginSuccessToast() {
    this.toastService.show(`Successfully Logged In &nbsp;😎`, 2000, 'green');
  }
  // Show  Login Fail Toast message
  showLoginFailToast() {
    this.toastService.show(`
    <b>Wrong</b>&nbsp;username or password &nbsp;😞
    `, 4000, 'red lighten-3');
  }

  userLogin() {
    if (this.user.username === environment.user.username && this.user.password === environment.user.password) {
      this.userService.setUserLoggedIn();
      this.router.navigate(['products']);
      this.showLoginSuccessToast();
    } else {
      this.showLoginFailToast();
    }

  }

}
