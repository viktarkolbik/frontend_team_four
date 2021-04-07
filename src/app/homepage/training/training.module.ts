import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { TrainingComponent } from './training.component';



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
