import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegformModule } from './regform/regform.module';
import { TrainingdescriptionModule } from './trainingdescription/trainingdescription.module';
import { HomepageModule } from './homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { I18n } from './app.i18n.config';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {SpinnerModule} from './homepage/spinner/spinner.module';
import { LoginpageModule} from './loginpage/loginpage.module';
import { AuthService } from './core/auth.service';
import { AuthInterceptor } from './core/auth.interceptor';
import {AdminpageModule} from "./secResource/adminpage/adminpage.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegformModule,
    TrainingdescriptionModule,
    HomepageModule,
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
