import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '../header/header.module';

import { TrainingdescriptionRoutingModule } from './trainingdescription-routing.module';
import { TrainingdescriptionComponent } from './trainingdescription.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    TrainingdescriptionComponent
  ],
  imports: [
    BrowserModule,
    TrainingdescriptionRoutingModule,
    HeaderModule,
    FooterModule,
    MatButtonModule
  ],
  providers: [],

  exports: [
    TrainingdescriptionComponent
  ]
})
export class TrainingdescriptionModule { }
