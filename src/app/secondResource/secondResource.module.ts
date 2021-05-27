import { NgModule } from '@angular/core';
import { AdminpageModule } from './adminpage/adminpage.module';
import { LoginpageModule } from './loginpage/loginpage.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminpageModule, LoginpageModule],
  providers: [],
  exports: []
})
export class SecondResourceModule {}
