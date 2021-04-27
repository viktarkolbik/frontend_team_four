import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { InternshipModule } from './internship/internship.module';
import {FormsModule} from '@angular/forms';
import {FilterModule} from './filter/filter.module';
import {InternshipsResolver} from '../../core/resolvers/internships-resolve.service';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HomepageRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    FilterModule,
    TranslateModule,
    InternshipModule,
    HttpClientModule
  ],
  providers: [
    InternshipsResolver
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
