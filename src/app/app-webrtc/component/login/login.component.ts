import { Component, OnInit } from '@angular/core';

import { LoginConstService } from "../../service/login-const.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginService : LoginConstService

  constructor(loginService : LoginConstService) {
    this.loginService = loginService;
  }

  ngOnInit() {
    
  }

}
