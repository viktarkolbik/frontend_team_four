import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {InternshipsResolver} from './core/internships-resolve.service';

const routes: Routes = [
  {path: '', component: HomepageComponent, resolve: {internships: InternshipsResolver}},
  {path: 'adminpage', loadChildren: () => import('./secResource/adminpage/adminpage.module').then(m => m.AdminpageModule)},
  {path: 'loginpage', loadChildren: () => import('./loginpage/loginpage.module').then(m => m.LoginpageModule)},
  // {path: 'trainingform', loadChildren: () => import('../trainingform/trainingform.module').then(m => m.TrainingformModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
