import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from './admins.component';
import {TableModule} from '../table/table.module';
import {IsAdminsGuard} from '../../../core/guards/is-admins.guard';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    TableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [IsAdminsGuard],
  exports: [AdminsComponent]
})
export class AdminsModule { }
