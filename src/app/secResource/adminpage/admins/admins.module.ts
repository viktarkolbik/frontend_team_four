import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from "./admins.component";

@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminsComponent]
})
export class AdminsModule { }
