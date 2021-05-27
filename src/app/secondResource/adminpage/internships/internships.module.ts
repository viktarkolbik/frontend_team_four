import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternshipsComponent } from './internships.component';
import { RouterModule } from '@angular/router';
import { InternshipModule } from './internship/internship.module';
import { IsAdminsGuard } from '../../../core/guards/is-admins.guard';
import { FilterInternshipsModule } from '../../../filterInternships/filterInternships.module';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [InternshipsComponent, AcceptDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    InternshipModule,
    FilterInternshipsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [IsAdminsGuard],
  exports: [InternshipsComponent],
  entryComponents: [AcceptDialogComponent]
})
export class InternshipsModule {}
