import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage.component';

const routes: Routes = [
  {
    path: 'errorpage',
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorpageRoutingModule { }
