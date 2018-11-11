import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialExpModule } from './material-exp.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";

//user service
import { LoginConstService } from "./service/login-const.service";

//user component
import { LoginComponent } from './component/login/login.component';
import { LoginDialogComponent } from './component/login-dialog/login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialExpModule
  ],
  declarations: [
    LoginComponent,
    LoginDialogComponent
  ],
  providers : [
    LoginConstService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents : [
    LoginDialogComponent
  ]
})
export class LoginModule { }
