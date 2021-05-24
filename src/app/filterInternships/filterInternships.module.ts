import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterInternshipsComponent } from './filterInternships.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FilterInternshipsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    TranslateModule,
    FormsModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [FilterInternshipsComponent]
})
export class FilterInternshipsModule {}
