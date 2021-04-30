import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TechexpertComponent} from './techexpert.component';
import {IsTechExpertGuard} from '../../../core/guards/is-tech-expert.guard';



@NgModule({
  declarations: [TechexpertComponent],
  imports: [
    CommonModule
  ],
  providers: [IsTechExpertGuard],
  exports: [TechexpertComponent]
})
export class TechexpertModule { }
