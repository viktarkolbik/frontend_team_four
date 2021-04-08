import { NgModule } from '@angular/core';
import {LoginpageComponent} from './loginpage.component';
import {BrowserModule} from '@angular/platform-browser';
import {LoginpageRoutingModule} from './loginpage-routing.module';
import {FooterModule} from '../footer/footer.module';
import {HeaderModule} from '../header/header.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    BrowserModule,
    LoginpageRoutingModule,
    FooterModule,
    HeaderModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule,
    MatButtonModule
  ],
  exports: [
    LoginpageComponent
  ]
})
export class LoginpageModule { }
