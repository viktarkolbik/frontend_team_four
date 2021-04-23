import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrainingformRoutingModule } from './trainingform-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { TrainingformComponent } from './trainingform.component';
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




@NgModule({
  declarations: [
    TrainingformComponent,
  ],
  imports: [
    BrowserModule,
    TrainingformRoutingModule,
    HeaderModule,
    FooterModule,
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
  ],
  exports: [TrainingformComponent]
})
export class TrainingformModule { }
