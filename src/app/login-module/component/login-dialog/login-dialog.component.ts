import { Component, OnInit, Inject } from '@angular/core';

import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  
  constructor(
    public matDialogRef : MatDialogRef<LoginDialogComponent>
    ,public route : Router
  ) { }

  ngOnInit() {
  }

  onClick(){
    this.route.navigateByUrl("/webrtc");
  }

}
