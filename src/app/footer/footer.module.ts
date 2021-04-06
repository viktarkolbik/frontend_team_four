import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
