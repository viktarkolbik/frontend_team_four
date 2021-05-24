import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechexpertComponent } from './techexpert.component';
import { IsTechExpertGuard } from '../../../core/guards/is-tech-expert.guard';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [TechexpertComponent],
  imports: [CommonModule, TableModule],
  providers: [IsTechExpertGuard],
  exports: [TechexpertComponent]
})
export class TechexpertModule {}
