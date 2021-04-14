import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { TrainingComponent } from './training.component';
import {HomepageRoutingModule} from '../homepage-routing.module';



@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HomepageRoutingModule
  ],
  exports: [
    TrainingComponent
  ]
})
export class TrainingModule { }
