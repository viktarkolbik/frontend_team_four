import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RegformComponent } from '../regform/regform.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { TrainingdescriptionComponent } from './trainingdescription.component';

const routes: Routes = [
  {
    path: 'trainingdescription',
    component: TrainingdescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingdescriptionRoutingModule { }
