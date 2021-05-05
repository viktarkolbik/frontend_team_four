import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipformComponent } from './internshipform.component';
import {LocationResolver} from '../../core/resolvers/location-resolve.service';

const routes: Routes = [
  {
    path: 'internshipform',
    component: InternshipformComponent,
    resolve: {location: LocationResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipformRoutingModule { }
