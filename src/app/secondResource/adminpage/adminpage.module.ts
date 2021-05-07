import { NgModule } from '@angular/core';
import {AdminpageComponent} from './adminpage.component';
import {AdminpageRoutingModule} from './adminpage-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {InternshipsModule} from './internships/internships.module';
import {AdminsModule} from './admins/admins.module';
import {TechexpertModule} from './techexpert/techexpert.module';
import {IsAuthorizedGuard} from '../../core/guards/is-authorized.guard';
import {TranslateModule} from '@ngx-translate/core';
import {InternshipformModule} from './internshipform/internshipform.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AdminpageComponent],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    InternshipsModule,
    AdminsModule,
    TechexpertModule,
    InternshipformModule,
    TranslateModule
  ],
  providers: [IsAuthorizedGuard],
  exports: [AdminpageComponent]
})
export class AdminpageModule { }
