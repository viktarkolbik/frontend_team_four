import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from './regform.component';
import {InternshipResolver} from "../../core/resolvers/internship-resolve.service";

const routes: Routes = [
  {
    path: 'regform/:id',
    component: RegformComponent,
    resolve: {internship: InternshipResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegformRoutingModule { }
