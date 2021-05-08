import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternshipsComponent} from './internships.component';
import {RouterModule} from '@angular/router';
import {InternshipModule} from './internship/internship.module';
import {IsAdminsGuard} from '../../../core/guards/is-admins.guard';
import {FilterInternshipsModule} from '../../../filterInternships/filterInternships.module';

@NgModule({
  declarations: [InternshipsComponent],
  imports: [
    CommonModule,
    RouterModule,
    InternshipModule,
    FilterInternshipsModule
  ],
  providers: [IsAdminsGuard],
  exports: [InternshipsComponent]
})
export class InternshipsModule { }
