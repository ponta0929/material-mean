import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing
import { AppRoutingModule } from './app-routing.module';
//User
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material/app-material.module';
import { FormExampleComponent } from './material/form-example/form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
