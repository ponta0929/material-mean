import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//user
import { FormExampleComponent } from './form-example/form-example.component';

const routes: Routes = [
  { path : "", redirectTo : "form" },
  { path : "form", component : FormExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMaterialRoutingModule { }
