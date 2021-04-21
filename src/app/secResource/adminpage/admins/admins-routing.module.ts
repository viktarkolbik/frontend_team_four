import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminsComponent} from "./admins.component";

const routes: Routes = [
  {
    path: 'admins/:id',
    component: AdminsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
