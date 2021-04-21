import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../core/auth.service";
import {User} from "../../types/user";

@Component({
  selector: 'ia-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  userInfo?: User | any;
  constructor(private route: ActivatedRoute,public auth: AuthService) {
    this.auth.getUserInfo().subscribe(data => {
      this.userInfo = data;
    });
  }
  ngOnInit(): void {
  }

}
