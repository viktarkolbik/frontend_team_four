import { NgModule } from '@angular/core';
import {LoginpageComponent} from './loginpage.component';
import {BrowserModule} from '@angular/platform-browser';
import {LoginpageRoutingModule} from './loginpage-routing.module';



@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    BrowserModule,
    LoginpageRoutingModule
  ],
  exports: [
    LoginpageComponent
  ]
})
export class LoginpageModule { }
