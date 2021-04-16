import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingformComponent } from './trainingform.component';

const routes: Routes = [
  {
    path: 'trainingform',
    component: TrainingformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingformRoutingModule { }
