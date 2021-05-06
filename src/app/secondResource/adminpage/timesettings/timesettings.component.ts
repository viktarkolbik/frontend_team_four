import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'ia-timesettings',
  templateUrl: './timesettings.component.html',
  styleUrls: ['./timesettings.component.scss']
})
export class TimesettingsComponent implements OnInit {
  Timeslots: any;
  userID: string = "";

  constructor(auth: AuthService) {
    auth.getUserInfo().subscribe(data => {
      this.Timeslots = data.userTimeSlots;
      this.userID = data.id;
    });
  }

  ngOnInit(): void {
  }

}
