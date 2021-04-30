import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipformComponent } from './internshipform.component';

const routes: Routes = [
  {
    path: 'internshipform',
    component: InternshipformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipformRoutingModule { }
