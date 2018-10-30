import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
//user
import { AppMaterialRoutingModule } from "./app-material-routing.module";
import { FormExampleComponent } from './form-example/form-example.component';

//Datepicker
import { MatDatepickerModule, MatNativeDateModule } from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    AppMaterialRoutingModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  declarations: [
    FormExampleComponent
  ],
})
export class AppMaterialModule { }
