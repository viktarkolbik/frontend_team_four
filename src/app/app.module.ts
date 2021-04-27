import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegformModule } from './firstResource/regform/regform.module';
import { InternshipdescriptionModule } from './firstResource/internshipdescription/internshipdescription.module';
import { HomepageModule } from './firstResource/homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { I18n } from './app.i18n.config';
import { InternshipformModule } from './secondResource/internshipform/internshipform.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SpinnerModule } from './firstResource/homepage/spinner/spinner.module';
import { ErrorpageModule } from './errorpage/errorpage.module';
import { LoginpageModule } from './secondResource/loginpage/loginpage.module';
import { AuthService } from './core/services/auth.service';
import { AuthInterceptor } from './core/auth.interceptor';
import { AdminpageModule } from "./secondResource/adminpage/adminpage.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegformModule,
    InternshipdescriptionModule,
    HomepageModule,
    InternshipformModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginpageModule,
    TranslateModule.forRoot(I18n.config),
    HeaderModule,
    FooterModule,
    SpinnerModule,
    AdminpageModule
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
