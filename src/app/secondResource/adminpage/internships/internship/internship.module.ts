import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {InternshipComponent} from './internship.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [InternshipComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule,
        TranslateModule
    ],
  exports: [InternshipComponent]
})
export class InternshipModule { }
