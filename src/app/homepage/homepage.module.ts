import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from "./homepage-routing.module";
import { HeaderModule } from '../header/header.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HomepageRoutingModule,
    HeaderModule,
    FooterModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
