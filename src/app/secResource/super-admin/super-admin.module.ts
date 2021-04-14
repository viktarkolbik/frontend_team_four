import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { SuperadminRoutingModule } from './super-admin-routing.module';
import { TableModule } from '../table/table.module';


@NgModule({
  declarations: [
    SuperAdminComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SuperadminRoutingModule
  ],
  exports: [
    SuperAdminComponent
  ]
})
export class SuperAdminModule { }
