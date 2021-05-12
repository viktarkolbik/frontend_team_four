import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminpageComponent} from './adminpage.component';
import {UserResolveService} from '../../core/resolvers/user-resolve.service';
import {InternshipsComponent} from './internships/internships.component';
import {AdminsComponent} from './admins/admins.component';
import {InternshipsResolver} from '../../core/resolvers/internships-resolve.service';
import {TechexpertComponent} from './techexpert/techexpert.component';
import {IsAdminsGuard} from '../../core/guards/is-admins.guard';
import {IsTechExpertGuard} from '../../core/guards/is-tech-expert.guard';
import {IsAuthorizedGuard} from '../../core/guards/is-authorized.guard';
import {AdminsResolveService} from '../../core/resolvers/admins-resolve.service';
import {TechExpertResolveService} from '../../core/resolvers/tech-expert-resolve.service';
import {UserInfoGuard} from '../../core/guards/user-info.guard';
import { InternlistComponent } from './internlist/internlist.component';
import { FormsAdminResolveService } from 'src/app/core/resolvers/forms-admin-resolve.service';
import { FormsResolveService } from 'src/app/core/resolvers/forms-resolve.service';

const routes: Routes = [
  {
    path: '',
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
      },
      {
        path: 'internlist',
        component: InternlistComponent,
        resolve: {interns: FormsAdminResolveService},
        canActivate: [IsAdminsGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
