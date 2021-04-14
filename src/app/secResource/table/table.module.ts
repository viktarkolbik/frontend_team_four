import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableComponent } from './table.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule
  ],
  providers: [],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
