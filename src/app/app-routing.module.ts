import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : "", redirectTo : "material", pathMatch : "full" },
  { path : "material", loadChildren: "./material/app-material.module#AppMaterialModule" },
  { path : "webrtc", loadChildren: "./app-webrtc/app-webrtc.module#AppWebrtcModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
