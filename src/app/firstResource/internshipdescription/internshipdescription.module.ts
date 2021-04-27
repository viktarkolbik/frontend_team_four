import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '../../header/header.module';

import { InternshipdescriptionRoutingModule } from './internshipdescription-routing.module';
import { InternshipdescriptionComponent } from './internshipdescription.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { InternshipResolver } from '../../core/resolvers/internship-resolve.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    InternshipdescriptionComponent
  ],
  imports: [
    BrowserModule,
    InternshipdescriptionRoutingModule,
    HeaderModule,
    FooterModule,
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