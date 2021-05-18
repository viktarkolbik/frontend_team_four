import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {InterviewService} from '../../../core/services/interview.service';

@Component({
  selector: 'ia-timesettings',
  templateUrl: './timesettings.component.html',
  styleUrls: ['./timesettings.component.scss']
})
export class TimesettingsComponent implements OnInit {
  Timeslots: any;
  Interviews: any;
  InterviewDuration: any;
  userID: string = "";
  form: FormGroup;
  convenientTimeArray: number[] = [];
  minDate: Date;
  crossFreeTime!: boolean;
  crossInterviewTime!: boolean;
  private convenientTime: {[key: string]: number} =
    {
      from: 9,
      to: 19,
    }
  ;

  constructor(
    private auth: AuthService,
    private interview: InterviewService,
    private userService: UserService,
  ) {
    this.minDate = new Date(Date.now());
    this.form = new FormGroup({
      selectedDate: new FormControl('', Validators.required),
      startHour: new FormControl('', Validators.required),
      endHour: new FormControl('', Validators.required)
    });
    this.form.valueChanges.subscribe(() => {
      this.check();
    })
    auth.getUserInfo().subscribe(data => {
      this.Timeslots = data.userTimeSlots;
      this.userID = data.id;
      this.InterviewDuration = data.interviewTime;
      interview.getInterview(data.id, data.userRole).subscribe(data => {
        this.Interviews = data;
        this.Interviews.forEach((el: any) => {
          el.interviewEndTime = new Date(
            Date.parse(el.adminInterviewDate) + this.InterviewDuration*60*1000)
            .toISOString();
        })
      })
    });
  }
  checkCrossTime(arr:[]):boolean {
    const arrCheck = arr;
    const TimeStart = this.form.get("selectedDate")?.value.setHours(this.form.get("startHour")?.value);
    const TimeEnd = this.form.get("selectedDate")?.value.setHours(this.form.get("endHour")?.value);

    const StartFreeTimeInArray = !!arrCheck.find((el: any) => {
      return el[0] <= TimeStart && el[1] > TimeStart
    });

    const EndFreeTimeInArray = !!arrCheck.find((el: any) => {
      return el[0] < TimeEnd && el[1] >= TimeEnd
    });

    const ArrayStartInNewSlot = !!arrCheck.find((el: any) => {
      return el[0] < TimeEnd && el[0] >= TimeStart
    });

    const ArrayEndInNewSlot = !!arrCheck.find((el: any) => {
      return el[1] <= TimeEnd && el[1] > TimeStart
    });

    return StartFreeTimeInArray || EndFreeTimeInArray || ArrayStartInNewSlot || ArrayEndInNewSlot
  }
  check():void {
    const arrTimeFree = this.Timeslots.map((el: any) =>
      [Date.parse(el.startDate), Date.parse(el.endDate)]
    );
    const arrInterview = this.Interviews.map((el: any) =>
      [Date.parse(el.adminInterviewDate), Date.parse(el.interviewEndTime)]
    );
    this.crossFreeTime = this.checkCrossTime(arrTimeFree)
    this.crossInterviewTime = this.checkCrossTime(arrInterview)
  }
  submit(): void {
    const formValue = this.form.value;
    const from = formValue.selectedDate.setHours(formValue.startHour + 3);
    const to = formValue.selectedDate.setHours(formValue.endHour + 3);
    const newSlot = [{
      endDate: (new Date(to)).toISOString(),
      roundUp: true,
      startDate: (new Date(from)).toISOString(),
    }]
    const formValueJson = JSON.stringify(newSlot);
    this.userService.sendTimeSlots(this.userID, formValueJson).subscribe(
      data => {
        this.Timeslots = data;
        this.check()
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
