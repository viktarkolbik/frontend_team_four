import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from './admins.component';
import {TableModule} from '../table/table.module';

@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [AdminsComponent]
})
export class AdminsModule { }
