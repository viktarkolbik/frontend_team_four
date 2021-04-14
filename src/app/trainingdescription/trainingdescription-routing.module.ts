import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingdescriptionComponent } from './trainingdescription.component';
import {InternshipResolver} from '../core/internship-resolve.service';

const routes: Routes = [
  {
    path: 'trainingdescription/:id',
    component: TrainingdescriptionComponent,
    resolve: {internship: InternshipResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingdescriptionRoutingModule { }
