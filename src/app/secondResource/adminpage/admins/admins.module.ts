import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from './admins.component';
import {TableModule} from '../table/table.module';
import {IsAdminsGuard} from '../../../core/guards/is-admins.guard';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [AdminsComponent],
    imports: [
        CommonModule,
        TableModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        TranslateModule
    ],
  providers: [IsAdminsGuard],
  exports: [AdminsComponent]
})
export class AdminsModule { }
