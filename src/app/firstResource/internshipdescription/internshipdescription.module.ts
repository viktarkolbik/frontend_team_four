import { NgModule } from '@angular/core';

import { InternshipdescriptionRoutingModule } from './internshipdescription-routing.module';
import { InternshipdescriptionComponent } from './internshipdescription.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { InternshipResolver } from '../../core/resolvers/internship-resolve.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    InternshipdescriptionComponent
  ],
  imports: [
    CommonModule,
    InternshipdescriptionRoutingModule,
    MatButtonModule,
    TranslateModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    InternshipResolver
  ],
  exports: [
    InternshipdescriptionComponent
  ]
})
export class InternshipdescriptionModule { }
