import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from '../regform/regform.component';
import { TrainingdescriptionComponent } from './trainingdescription.component';

const routes: Routes = [
  {
    path: 'trainingdescription',
    component: TrainingdescriptionComponent
  },
  {
    path: 'regform',
    component: RegformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingdescriptionRoutingModule { }
