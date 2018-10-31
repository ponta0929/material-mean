import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//user
import { LoginComponent } from "./component/login/login.component";

const routes: Routes = [
  { path : "", redirectTo: "login" }
  ,{ path : "login", component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppWebrtcRoutingModule { }
