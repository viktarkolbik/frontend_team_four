import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegformRoutingModule } from './regform-routing.module';
import { RegformComponent } from './regform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    RegformComponent
  ],
  imports: [
    BrowserModule,
    RegformRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HeaderModule
  ],
  providers: [],
  exports: [RegformComponent]
})
export class RegformModule { }
