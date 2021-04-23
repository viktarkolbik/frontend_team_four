import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminpageComponent} from './adminpage.component';
import {UserResolveService} from '../../core/user-resolve.service';
import {InternshipsComponent} from './internships/internships.component';
import {AdminsComponent} from './admins/admins.component';
import {InternshipsResolver} from '../../core/internships-resolve.service';
import {TechexpertComponent} from './techexpert/techexpert.component';
import {FormsResolveService} from '../../core/forms-resolve.service';
import {IsAdminsGuard} from '../../core/guards/is-admins.guard';
import {IsTechExpertGuard} from '../../core/guards/is-tech-expert.guard';
import {IsAuthorizedGuard} from '../../core/guards/is-authorized.guard';

const routes: Routes = [
  {
    path: 'adminpage',
    component: AdminpageComponent,
    resolve: {userInfo: UserResolveService},
    canActivate: [IsAuthorizedGuard],
    canActivateChild: [IsAuthorizedGuard],
    children: [
      {
        path: 'internships',
        component: InternshipsComponent,
        resolve: {internships: InternshipsResolver},
        canActivate: [IsAdminsGuard]
      },
      {
        path: 'admins/:id',
        component: AdminsComponent,
        resolve: {candidates: FormsResolveService},
        canActivate: [IsAdminsGuard]
      },
      {
        path: 'techexpert',
        component: TechexpertComponent,
        canActivate: [IsTechExpertGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
