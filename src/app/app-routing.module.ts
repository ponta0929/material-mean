import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempComponent } from "./material/temp/temp.component";

const routes: Routes = [
  { path : "", redirectTo : "/temp", pathMatch : "full" },
  { path : "temp", component : TempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
