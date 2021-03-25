import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegformRoutingModule } from './regform-routing.module';

import { RegformComponent } from './regform.component';

@NgModule({
  declarations: [
    RegformComponent
  ],
  imports: [
    BrowserModule,
    RegformRoutingModule
  ],
  providers: [],
  bootstrap: [RegformComponent],
  exports: [RegformComponent]
})
export class RegformModule { }