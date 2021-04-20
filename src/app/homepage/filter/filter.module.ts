import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from './filter.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
