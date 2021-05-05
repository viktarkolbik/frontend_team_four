import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InternshipformComponent } from './internshipform.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatAutocompleteModule} from "@angular/material/autocomplete";




@NgModule({
  declarations: [
    InternshipformComponent,
  ],
    imports: [
        BrowserModule,
        MatFormFieldModule,
        TranslateModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatAutocompleteModule,
    ],
  exports: [InternshipformComponent]
})
export class InternshipformModule { }
