import { NgModule } from '@angular/core';
//AngularMaterial
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
//Datepicker
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from "@angular/material";


@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatDatepickerModule, MatInputModule, MatNativeDateModule
  ],
  declarations: []
})
export class AppMaterialModule { }
