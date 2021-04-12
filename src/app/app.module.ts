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
import {LoginpageModule} from './loginpage/loginpage.module';


@NgModule({
  declarations: [
    AppComponent,
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
    TranslateModule.forRoot(I18n.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
