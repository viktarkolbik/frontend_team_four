import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import {InternshipsResolver} from '../core/internships-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    resolve: {internships: InternshipsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
