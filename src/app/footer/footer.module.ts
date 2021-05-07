import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
