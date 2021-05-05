import { NgModule } from '@angular/core';
import { ErrorpageRoutingModule } from './errorpage-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorpageComponent } from './errorpage.component';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ErrorpageComponent
  ],
  imports: [
    CommonModule,
    ErrorpageRoutingModule,
    TranslateModule,
    MatButtonModule
  ],
  exports: [ErrorpageComponent]
})

export class ErrorpageModule { }
