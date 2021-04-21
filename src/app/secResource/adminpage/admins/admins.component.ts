import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/auth.service";
import {User} from "../../../types/user";

@Component({
  selector: 'ia-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  userInfo?: User | any;
  constructor(auth: AuthService) {
    auth.getUserInfo().subscribe(data => this.userInfo = data);
  }

  ngOnInit(): void {
  }

}
