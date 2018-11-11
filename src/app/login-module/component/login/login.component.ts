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
  matDialogRef : MatDialogRef<LoginDialogComponent>

  constructor(
    public loginService : LoginConstService,
    public matDialog : MatDialog
  ) {
  }

  ngOnInit() {
    setTimeout(()=>{
      this.matDialogRef = this.matDialog.open(LoginDialogComponent, dialogConfig);
    })
  }

}
