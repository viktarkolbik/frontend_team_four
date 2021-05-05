import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdminpageModule} from './adminpage/adminpage.module';
import {LoginpageModule} from './loginpage/loginpage.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AdminpageModule,
    LoginpageModule,
  ],
  providers: [],
  exports: []
})
export class SecondResourceModule { }
