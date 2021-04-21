import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminpageComponent} from './adminpage.component';
import {UserResolveService} from '../../core/user-resolve.service';
import {InternshipsComponent} from './internships/internships.component';
import {AdminsComponent} from './admins/admins.component';
import {InternshipsResolver} from '../../core/internships-resolve.service';
import {TechexpertComponent} from './techexpert/techexpert.component';
import {FormsResolveService} from '../../core/forms-resolve.service';

const routes: Routes = [
  {
    path: 'adminpage',
    component: AdminpageComponent,
    resolve: {userInfo: UserResolveService},
    children: [
      {
        path: 'internships',
        component: InternshipsComponent,
        resolve: {internships: InternshipsResolver}
      },
      {
        path: 'admins/:id',
        component: AdminsComponent,
        resolve: {candidates: FormsResolveService}
      },
      {
        path: 'techexpert',
        component: TechexpertComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
