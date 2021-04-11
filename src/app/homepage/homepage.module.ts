import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { TrainingModule } from './training/training.module';
import {InternshipsResolver} from '../core/internships-resolve.service';

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
    MatButtonModule,
    TranslateModule,
    TrainingModule,
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
