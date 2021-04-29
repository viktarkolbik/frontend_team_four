import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from './regform.component';
import {LocationResolver} from '../../core/resolvers/location-resolve.service';

const routes: Routes = [
  {
    path: 'regform/:id',
    component: RegformComponent,
    resolve: {location: LocationResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegformRoutingModule { }
