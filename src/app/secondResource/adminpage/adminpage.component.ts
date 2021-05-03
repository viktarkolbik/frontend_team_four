import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {User} from '../../types/user';

@Component({
  selector: 'ia-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  userInfo = {} as User;
  constructor(public auth: AuthService)  {
    this.auth.getUserInfo().subscribe(data => {
      this.userInfo = data;
    });
  }
  ngOnInit(): void {
  }

}
