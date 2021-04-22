import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from './admins.component';
import {TableModule} from '../table/table.module';
import {IsAdminsGuard} from '../../../core/guards/is-admins.guard';

@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  providers: [IsAdminsGuard],
  exports: [AdminsComponent]
})
export class AdminsModule { }
