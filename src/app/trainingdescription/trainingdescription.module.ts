import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TrainingdescriptionRoutingModule } from './trainingdescription-routing.module';
import { TrainingdescriptionComponent } from './trainingdescription.component';

@NgModule({
  declarations: [
    TrainingdescriptionComponent
  ],
  imports: [
    BrowserModule,
    TrainingdescriptionRoutingModule
  ],
  providers: [],
  bootstrap: [TrainingdescriptionComponent],

  exports: [
    TrainingdescriptionComponent
  ]
})
export class TrainingdescriptionModule { }
