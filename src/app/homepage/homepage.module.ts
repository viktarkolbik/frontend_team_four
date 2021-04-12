import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { TrainingModule } from './training/training.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HomepageRoutingModule,
    HeaderModule,
    FooterModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    TranslateModule,
    TrainingModule,
    HttpClientModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
