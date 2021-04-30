import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorpageRoutingModule } from './errorpage-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorpageComponent } from './errorpage.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    ErrorpageRoutingModule,
    TranslateModule,
    MatButtonModule
  ],
  exports: [ErrorpageComponent]
})

export class ErrorpageModule { }
