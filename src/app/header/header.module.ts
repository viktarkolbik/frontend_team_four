import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatFormFieldModule,
    TranslateModule,
  ],
  providers: [],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
