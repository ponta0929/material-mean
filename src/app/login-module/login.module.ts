import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialExpModule } from './material-exp.module';

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
    LoginConstService
  ],
  entryComponents : [
    LoginDialogComponent
  ]
})
export class LoginModule { }
