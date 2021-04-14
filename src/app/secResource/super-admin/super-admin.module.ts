import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { SuperadminRoutingModule } from './super-admin-routing.module';
import { TableModule } from '../table/table.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { HeaderModule } from 'src/app/header/header.module';


@NgModule({
  declarations: [
    SuperAdminComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SuperadminRoutingModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    SuperAdminComponent
  ]
})
export class SuperAdminModule { }
