import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternlistComponent } from './internlist.component';



@NgModule({
  declarations: [InternlistComponent],
  imports: [
    CommonModule
  ], 
  exports: [InternlistComponent]
})
export class InternlistModule { }
