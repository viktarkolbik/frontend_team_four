import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminpageComponent} from './adminpage.component';
import {UserResolveService} from "../../core/user-resolve.service";
import {InternshipsComponent} from "./internships/internships.component";
import {AdminsComponent} from "./admins/admins.component";
import {InternshipsResolver} from "../../core/internships-resolve.service";

const routes: Routes = [
  {
    path: 'adminpage',
    component: AdminpageComponent,
    resolve: {userInfo: UserResolveService},
    children: [
      {
        path: '',
        component: InternshipsComponent,
        resolve: {internships: InternshipsResolver}
      },
      {
        path: 'admins/:id',
        component: AdminsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
