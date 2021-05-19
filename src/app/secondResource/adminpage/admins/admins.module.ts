import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from './admins.component';
import {TableModule} from '../table/table.module';
import {IsAdminsGuard} from '../../../core/guards/is-admins.guard';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {InterviewDialogComponent} from './interview-dialog/interview-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {TranslateModule} from '@ngx-translate/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AdminsComponent,
    InterviewDialogComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
    TranslateModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [IsAdminsGuard],
  exports: [AdminsComponent],
  entryComponents: [InterviewDialogComponent]
})
export class AdminsModule { }
