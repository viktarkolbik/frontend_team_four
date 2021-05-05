import { NgModule } from '@angular/core';

import { TableComponent } from './table.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
