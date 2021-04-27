import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipdescriptionComponent } from './internshipdescription.component';
import {InternshipResolver} from '../../core/resolvers/internship-resolve.service';

const routes: Routes = [
  {
    path: 'internshipdescription/:id',
    component: InternshipdescriptionComponent,
    resolve: {internship: InternshipResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipdescriptionRoutingModule { }
