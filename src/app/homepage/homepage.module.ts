import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from "./homepage-routing.module";
import { HeaderModule } from '../header/header.module';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HomepageRoutingModule,
    HeaderModule
  ],
  providers: [],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
