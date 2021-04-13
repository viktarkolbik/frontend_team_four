import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '../header/header.module';

import { TrainingdescriptionRoutingModule } from './trainingdescription-routing.module';
import { TrainingdescriptionComponent } from './trainingdescription.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { InternshipResolver } from '../core/internship-resolve.service';

@NgModule({
  declarations: [
    TrainingdescriptionComponent
  ],
  imports: [
    BrowserModule,
    TrainingdescriptionRoutingModule,
    HeaderModule,
    FooterModule,
    MatButtonModule,
    TranslateModule,
    HttpClientModule
  ],
  providers: [
    InternshipResolver
  ],
  exports: [
    TrainingdescriptionComponent
  ]
})
export class TrainingdescriptionModule { }
