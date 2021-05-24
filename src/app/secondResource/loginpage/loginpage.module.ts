import { NgModule } from '@angular/core';
import { LoginpageComponent } from './loginpage.component';
import { LoginpageRoutingModule } from './loginpage-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule,
    MatButtonModule
  ],
  exports: [LoginpageComponent]
})
export class LoginpageModule {}
