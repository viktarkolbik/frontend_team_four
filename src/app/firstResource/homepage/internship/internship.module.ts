import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InternshipComponent } from './internship.component';
import { HomepageRoutingModule } from '../homepage-routing.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    InternshipComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HomepageRoutingModule,
    TranslateModule
  ],
  exports: [
    InternshipComponent
  ]
})
export class InternshipModule { }
