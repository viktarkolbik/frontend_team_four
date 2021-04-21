import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {InternshipComponent} from './internship.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [InternshipComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [InternshipComponent]
})
export class InternshipModule { }
