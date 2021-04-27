import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../firstResource/homepage/homepage.component';
import { ErrorpageComponent } from './errorpage.component';

const routes: Routes = [
  {
    path: '**',
    component: ErrorpageComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorpageRoutingModule { }
