import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminpageComponent} from './adminpage.component';
import {AdminpageRoutingModule} from './adminpage-routing.module';
import {HeaderModule} from "../../header/header.module";
import {FooterModule} from "../../footer/footer.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {InternshipsModule} from "./internships/internships.module";
import {AdminsModule} from "./admins/admins.module";
import {TechexpertModule} from "./techexpert/techexpert.module";



@NgModule({
  declarations: [AdminpageComponent],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
    HeaderModule,
    FooterModule,
    MatToolbarModule,
    MatButtonModule,
    InternshipsModule,
    AdminsModule,
    TechexpertModule
  ],
  exports: [AdminpageComponent]
})
export class AdminpageModule { }
