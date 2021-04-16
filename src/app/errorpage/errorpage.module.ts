import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorpageRoutingModule } from './errorpage-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorpageComponent } from './errorpage.component';

@NgModule({
  declarations: [
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    ErrorpageRoutingModule,
    HeaderModule,
    FooterModule,
    TranslateModule
  ],
  exports: [ErrorpageComponent]
})

export class ErrorpageModule { }
