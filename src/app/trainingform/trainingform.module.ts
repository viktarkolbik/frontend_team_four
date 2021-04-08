import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrainingformRoutingModule } from './trainingform-routing.module';
import { TrainingformComponent } from './trainingform.component';



@NgModule({
  declarations: [
    TrainingformComponent
  ],
  imports: [
    BrowserModule,
    TrainingformRoutingModule
  ],
  exports: [TrainingformComponent]
})
export class TrainingformModule { }
