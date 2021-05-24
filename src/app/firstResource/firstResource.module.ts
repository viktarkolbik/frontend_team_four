import { NgModule } from '@angular/core';
import { HomepageModule } from './homepage/homepage.module';
import { InternshipdescriptionModule } from './internshipdescription/internshipdescription.module';
import { RegformModule } from './regform/regform.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageModule,
    InternshipdescriptionModule,
    RegformModule
  ],
  providers: [],
  exports: []
})
export class FirstResourceModule {}
