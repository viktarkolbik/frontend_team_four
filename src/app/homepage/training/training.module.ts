import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    TrainingComponent
  ]
})
export class TrainingModule { }
