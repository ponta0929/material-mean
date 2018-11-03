import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : "", redirectTo : "login", pathMatch : "full" },
  { path : "login", loadChildren: "./login-module/login.module#LoginModule" },
  { path : "webrtc", loadChildren: "./app-webrtc/app-webrtc.module#AppWebrtcModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
