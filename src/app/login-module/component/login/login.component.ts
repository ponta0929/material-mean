import { Component, OnInit } from '@angular/core';

import { LoginConstService } from "../../service/login-const.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { LoginDialogComponent } from "../login-dialog/login-dialog.component";

const dialogConfig = {
  height : "500px",
  width : "500px",
  disableClose : true
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginService : LoginConstService
  matDialog : MatDialog
  matDialogRef : MatDialogRef<LoginDialogComponent>

  constructor(
    loginService : LoginConstService,
    matDialog : MatDialog
  ) {
    this.loginService = loginService;
    this.matDialog = matDialog;
  }

  ngOnInit() {
    this.matDialogRef = this.matDialog.open(LoginDialogComponent, dialogConfig);
    //aaa
  }

}
