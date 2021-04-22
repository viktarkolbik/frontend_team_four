import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TrainingComponent } from './training.component';
import { HomepageRoutingModule } from '../homepage-routing.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HomepageRoutingModule,
    TranslateModule
  ],
  exports: [
    TrainingComponent
  ]
})
export class TrainingModule { }
