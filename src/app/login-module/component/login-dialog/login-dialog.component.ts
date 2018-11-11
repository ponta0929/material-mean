import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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
    ,private changeDetectorRef : ChangeDetectorRef
  ) { 
    //this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {

  }

  onClick(){
    this.route.navigateByUrl("/webrtc");
  }

}
