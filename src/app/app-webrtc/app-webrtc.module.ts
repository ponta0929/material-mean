import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppWebrtcRoutingModule } from './app-webrtc-routing.module';
import { MaterialExpModule } from './material-exp.module';

//user service
import { LoginConstService } from "./service/login-const.service";

//user component
import { LoginComponent } from './component/login/login.component';
import { LoginDialogComponent } from './component/login-dialog/login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppWebrtcRoutingModule,
    MaterialExpModule
  ],
  declarations: [
    LoginComponent,
    LoginDialogComponent
  ],
  providers : [
    LoginConstService
  ]
})
export class AppWebrtcModule { }
