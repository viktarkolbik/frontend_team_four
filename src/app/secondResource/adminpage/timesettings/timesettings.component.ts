import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'ia-timesettings',
  templateUrl: './timesettings.component.html',
  styleUrls: ['./timesettings.component.scss']
})
export class TimesettingsComponent implements OnInit {
  Timeslots: any;
  userID: string = "";
  form: FormGroup;
  convenientTimeArray: number[] = [];
  minDate: Date;
  private convenientTime: {[key: string]: number} =
    {
      from: 9,
      to: 19,
    }
  ;

  constructor(auth: AuthService, private userService: UserService) {
    this.minDate = new Date(Date.now());
    this.form = new FormGroup({
      selectedDate: new FormControl('', Validators.required),
      startHour: new FormControl('', Validators.required),
      endHour: new FormControl('', Validators.required)
    });
    auth.getUserInfo().subscribe(data => {
      this.Timeslots = data.userTimeSlots;
      this.userID = data.id;
    });
  }

  submit(): void {
    const formValue = this.form.value;
    const from = formValue.selectedDate.setHours(formValue.startHour);
    const to = formValue.selectedDate.setHours(formValue.endHour);
    const newSlot = [{
      endDate: (new Date(to)).toISOString(),
      roundUp: true,
      startDate: (new Date(from)).toISOString(),
    }]
    console.log(newSlot);
    const formValueJson = JSON.stringify(newSlot);
    this.userService.sendTimeSlots(this.userID, formValueJson).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    for (let i = this.convenientTime.from; i <= this.convenientTime.to; i++){
      this.convenientTimeArray.push(i);
    }
  }
}
