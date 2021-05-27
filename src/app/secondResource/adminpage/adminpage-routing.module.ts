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
import {TimesettingsComponent} from './timesettings/timesettings.component';
import { InternlistComponent } from './internlist/internlist.component';
import { FormsAdminResolveService } from 'src/app/core/resolvers/forms-admin-resolve.service';
import { FormsResolveService } from 'src/app/core/resolvers/forms-resolve.service';
import { InternshipformComponent } from './internshipform/internshipform.component';
import { LocationResolver } from 'src/app/core/resolvers/location-resolve.service';
import {SkillsResolveService} from '../../core/resolvers/skills-resolve.service';
import {InternshipResolver} from '../../core/resolvers/internship-resolve.service';
import {InternshipWithUsersResolveService} from "../../core/resolvers/internship-with-users-resolve.service";
import {AllAdminsResolveService} from "../../core/resolvers/all-admins-resolve.service";
import {TimesettingsResolver} from '../../core/resolvers/timesettings-resolve.service';

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
          internship: InternshipResolver
        },
        canActivate: [IsAdminsGuard]
      },
      {
        path: 'techexpert',
        component: TechexpertComponent,
        resolve: {interns: FormsAdminResolveService},
        canActivate: [IsTechExpertGuard]
      },
      {
        path: 'internshipform',
        component: InternshipformComponent,
        resolve: {
          location: LocationResolver,
          skills: SkillsResolveService,
          admins: AllAdminsResolveService,
        }
      },
      {
        path: 'timesettings',
        component: TimesettingsComponent,
        resolve: {
          interview: TimesettingsResolver
        }
      },
      {
        path: 'internshipform/:id',
        component: InternshipformComponent,
        resolve: {
          location: LocationResolver,
          skills: SkillsResolveService,
          internshipData: InternshipWithUsersResolveService,
          admins: AllAdminsResolveService,
        }
      },
      {
        path: 'internlist',
        component: InternlistComponent,
        resolve: {interns: FormsAdminResolveService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
