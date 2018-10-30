import { NgModule } from '@angular/core';
//AngularMaterial
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
//Datepicker
import { MatDatepickerModule, MatNativeDateModule } from "@angular/material";


@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  declarations: []
})
export class AppMaterialModule { }
