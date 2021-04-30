import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomepageModule} from './homepage/homepage.module';
import {InternshipdescriptionModule} from './internshipdescription/internshipdescription.module';
import {RegformModule} from './regform/regform.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HomepageModule,
    InternshipdescriptionModule,
    RegformModule,
  ],
  providers: [],
  exports: []
})
export class FirstResourceModule { }
