import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { InternshipModule } from './internship/internship.module';
import {FormsModule} from '@angular/forms';
import {FilterInternshipsModule} from '../../filterInternships/filterInternships.module';
import {InternshipsResolver} from '../../core/resolvers/internships-resolve.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
    FilterInternshipsModule,
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
