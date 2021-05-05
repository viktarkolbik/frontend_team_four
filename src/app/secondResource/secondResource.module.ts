import { NgModule } from '@angular/core';
import {AdminpageModule} from './adminpage/adminpage.module';
import {InternshipformModule} from './internshipform/internshipform.module';
import {LoginpageModule} from './loginpage/loginpage.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminpageModule,
    InternshipformModule,
    LoginpageModule,
  ],
  providers: [],
  exports: []
})
export class SecondResourceModule { }
