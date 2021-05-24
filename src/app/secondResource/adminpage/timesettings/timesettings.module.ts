import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimesettingsComponent } from './timesettings.component';
import { SlotComponent } from './slot/slot.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InterviewComponent } from './interview/interview.component';
import { TimesettingsResolver } from '../../../core/resolvers/timesettings-resolve.service';

@NgModule({
  declarations: [TimesettingsComponent, SlotComponent, InterviewComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
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
    MatAutocompleteModule
  ],
  providers: [TimesettingsResolver],
  exports: [TimesettingsComponent]
})
export class TimesettingsModule {}
