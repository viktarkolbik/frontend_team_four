import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegformModule } from './regform/regform.module';
import { TrainingdescriptionModule } from './trainingdescription/trainingdescription.module';
import { HomepageModule } from './homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { I18n } from './app.i18n.config';
import { TrainingformModule } from './trainingform/trainingform.module';
import {LoginpageModule} from './loginpage/loginpage.module';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';

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
    TrainingformModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginpageModule,
    TranslateModule.forRoot(I18n.config),
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
