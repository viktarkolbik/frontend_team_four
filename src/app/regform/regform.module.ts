import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegformRoutingModule } from './regform-routing.module';
import { RegformComponent } from './regform.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';

@NgModule({
  declarations: [
    RegformComponent,
    DialogElementsExampleDialog
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
    HeaderModule,
    FooterModule,
    TranslateModule,
    MatDialogModule
  ],
  providers: [],
  exports: [RegformComponent],
  entryComponents: [DialogElementsExampleDialog]
})
export class RegformModule { }
