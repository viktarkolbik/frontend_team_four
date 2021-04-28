import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { I18n } from './app.i18n.config';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SpinnerModule } from './firstResource/homepage/spinner/spinner.module';
import { ErrorpageModule } from './errorpage/errorpage.module';
import { AuthService } from './core/services/auth.service';
import { AuthInterceptor } from './core/auth.interceptor';
import {FirstResourceModule} from './firstResource/firstResource.module';
import {SecondResourceModule} from './secondResource/secondResource.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FirstResourceModule,
    SecondResourceModule,
    TranslateModule.forRoot(I18n.config),
    HeaderModule,
    FooterModule,
    SpinnerModule,
    ErrorpageModule
  ],
  providers: [
    AuthService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
