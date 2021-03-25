import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage.component';
import {HomepageRoutingModule} from "./homepage-routing.module";

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HomepageRoutingModule
  ],
  providers: [],
  exports: [
    HomepageComponent
  ],
  bootstrap: [HomepageComponent]
})
export class HomepageModule { }
