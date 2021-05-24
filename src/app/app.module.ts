import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot(I18n.config),
    HeaderModule,
    FooterModule,
    SpinnerModule,
    ErrorpageModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
