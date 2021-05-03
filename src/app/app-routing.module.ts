import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './firstResource/homepage/homepage.component';
import {InternshipsResolver} from './core/resolvers/internships-resolve.service';

const routes: Routes = [
  {path: '', component: HomepageComponent, resolve: {internships: InternshipsResolver}},
  {path: 'adminpage', loadChildren: () => import('./secondResource/adminpage/adminpage.module').then(m => m.AdminpageModule)},
  {path: 'loginpage', loadChildren: () => import('./secondResource/loginpage/loginpage.module').then(m => m.LoginpageModule)},
  {path: 'trainingform', loadChildren: () => import('./secondResource/internshipform/internshipform.module').then(m => m.InternshipformModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
