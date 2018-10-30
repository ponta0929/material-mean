import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//AngularMaterial
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

//User
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
