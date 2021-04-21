import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternshipsComponent} from "./internships.component";
import {RouterModule} from "@angular/router";
import {InternshipModule} from "./internship/internship.module";

@NgModule({
  declarations: [InternshipsComponent],
  imports: [
    CommonModule,
    RouterModule,
    InternshipModule
  ],
  exports: [InternshipsComponent]
})
export class InternshipsModule { }
