import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminpageComponent} from './adminpage.component';
import {AdminpageRoutingModule} from './adminpage-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {InternshipsModule} from './internships/internships.module';
import {AdminsModule} from './admins/admins.module';
import {TechexpertModule} from './techexpert/techexpert.module';
import {IsAuthorizedGuard} from '../../core/guards/is-authorized.guard';

@NgModule({
  declarations: [AdminpageComponent],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    InternshipsModule,
    AdminsModule,
    TechexpertModule
  ],
  providers: [IsAuthorizedGuard],
  exports: [AdminpageComponent]
})
export class AdminpageModule { }
