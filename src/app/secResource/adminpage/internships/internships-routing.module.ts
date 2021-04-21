import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InternshipsComponent} from "./internships.component";

const routes: Routes = [
  {
    path: '',
    component: InternshipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipsRoutingModule { }
