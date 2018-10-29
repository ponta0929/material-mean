import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormExampleComponent } from './material/form-example/form-example.component';

const routes: Routes = [
  { path : "", redirectTo : "/form", pathMatch : "full" },
  { path : "form", component : FormExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
