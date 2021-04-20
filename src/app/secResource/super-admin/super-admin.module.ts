import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { SuperadminRoutingModule } from './super-admin-routing.module';
import { TableModule } from '../table/table.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { HeaderModule } from 'src/app/header/header.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SuperAdminComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SuperadminRoutingModule,
    HeaderModule,
    FooterModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    SuperAdminComponent
  ]
})
export class SuperAdminModule { }
