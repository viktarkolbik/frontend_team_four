import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./firstResource/firstResource.module')
      .then(m => m.FirstResourceModule)},
  {path: 'adminpage', loadChildren: () => import('./secondResource/adminpage/adminpage.module')
      .then(m => m.AdminpageModule)},
  {path: 'loginpage', loadChildren: () => import('./secondResource/loginpage/loginpage.module')
      .then(m => m.LoginpageModule)},
  {path: 'internshipform', loadChildren: () => import('./secondResource/internshipform/internshipform.module')
      .then(m => m.InternshipformModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
