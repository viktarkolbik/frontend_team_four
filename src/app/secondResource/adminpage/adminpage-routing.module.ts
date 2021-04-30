import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminpageComponent} from './adminpage.component';
import {UserResolveService} from '../../core/resolvers/user-resolve.service';
import {InternshipsComponent} from './internships/internships.component';
import {AdminsComponent} from './admins/admins.component';
import {InternshipsResolver} from '../../core/resolvers/internships-resolve.service';
import {TechexpertComponent} from './techexpert/techexpert.component';
import {FormsResolveService} from '../../core/resolvers/forms-resolve.service';
import {IsAdminsGuard} from '../../core/guards/is-admins.guard';
import {IsTechExpertGuard} from '../../core/guards/is-tech-expert.guard';
import {IsAuthorizedGuard} from '../../core/guards/is-authorized.guard';
import {AdminsResolveService} from '../../core/resolvers/admins-resolve.service';
import {TechExpertResolveService} from '../../core/resolvers/tech-expert-resolve.service';
import {UserInfoGuard} from '../../core/guards/user-info.guard';

const routes: Routes = [
  {
    path: 'adminpage',
    component: AdminpageComponent,
    resolve: {userInfo: UserResolveService},
    canActivate: [IsAuthorizedGuard, UserInfoGuard],
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
        resolve: {
          candidates: FormsResolveService,
          admins: AdminsResolveService,
          techExperts: TechExpertResolveService,
        },
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
