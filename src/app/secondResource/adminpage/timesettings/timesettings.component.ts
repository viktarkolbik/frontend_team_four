import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { InterviewService } from '../../../core/services/interview.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ia-timesettings',
  templateUrl: './timesettings.component.html',
  styleUrls: ['./timesettings.component.scss']
})
export class TimesettingsComponent implements OnInit {
  user: any;
  Interviews: any;
  form: FormGroup;
  convenientTimeArray: number[] = [];
  minDate: Date;
  crossFreeTime!: boolean;
  crossInterviewTime!: boolean;
  timeLocale = new Date().getTimezoneOffset();
  timezone: string;
  private convenientTime: { [key: string]: number } = {
    from: 9,
    to: 19
  };


  constructor(
    private auth: AuthService,
    private interview: InterviewService,
    private userService: UserService,
    private route: ActivatedRoute
    ) {
      this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      this.minDate = new Date(Date.now());
      this.form = new FormGroup({
        selectedDate: new FormControl('', Validators.required),
        startHour: new FormControl('', Validators.required),
        endHour: new FormControl('', Validators.required)
      });
      this.form.valueChanges.subscribe(() => {
      this.check();
    });
    auth.getUserInfo().subscribe(data => {
      this.user = data;
      this.timeToLocaleSlots(this.user.userTimeSlots);
    });
    this.route.data.subscribe(data => {
      this.Interviews = data.interview;
      this.Interviews.map((el: any) => {
        if (this.user.userRole === 'ADMIN') {
          el.adminInterviewDate =
            Date.parse(el.adminInterviewDate) - this.timeLocale * 60 * 1000;
          el.adminInterviewDate = new Date(el.adminInterviewDate).toISOString();
          el.startTime = el.adminInterviewDate;
        }
        if (this.user.userRole === 'TECH_EXPERT') {
          el.techInterviewDate =
            Date.parse(el.techInterviewDate) - this.timeLocale * 60 * 1000;
          el.techInterviewDate = new Date(el.techInterviewDate).toISOString();
          el.startTime = el.techInterviewDate;
        }
        el.endTime = new Date(
          Date.parse(el.startTime) + this.user.interviewTime * 60 * 1000
        ).toISOString();
      });
    });
  }
  timeToLocaleSlots = (slots: any) => {
    slots.map((el: any) => {
      el.startDate = Date.parse(el.startDate) - this.timeLocale * 60 * 1000;
      el.startDate = new Date(el.startDate).toISOString();
      el.endDate = Date.parse(el.endDate) - this.timeLocale * 60 * 1000;
      el.endDate = new Date(el.endDate).toISOString();
    });
  };
  checkCrossTime(arr: []): boolean {
    const arrCheck = arr;
    const TimeStart = this.form
      .get('selectedDate')
      ?.value.setHours(this.form.get('startHour')?.value);
    const TimeEnd = this.form
      .get('selectedDate')
      ?.value.setHours(this.form.get('endHour')?.value);

    const StartFreeTimeInArray = !!arrCheck.find((el: any) => el[0] <= TimeStart && el[1] > TimeStart);

    const EndFreeTimeInArray = !!arrCheck.find((el: any) => el[0] < TimeEnd && el[1] >= TimeEnd);

    const ArrayStartInNewSlot = !!arrCheck.find((el: any) => el[0] < TimeEnd && el[0] >= TimeStart);

    const ArrayEndInNewSlot = !!arrCheck.find((el: any) => el[1] <= TimeEnd && el[1] > TimeStart);

    return (
      StartFreeTimeInArray ||
      EndFreeTimeInArray ||
      ArrayStartInNewSlot ||
      ArrayEndInNewSlot
    );
  }
  check(): void {
    const arrTimeFree = this.user.userTimeSlots.map((el: any) => [
      Date.parse(el.startDate),
      Date.parse(el.endDate)
    ]);
    const arrInterview = this.Interviews.map((el: any) => [
      Date.parse(el.startTime),
      Date.parse(el.endTime)
    ]);
    this.crossFreeTime = this.checkCrossTime(arrTimeFree);
    this.crossInterviewTime = this.checkCrossTime(arrInterview);
  }
  submit(): void {
    const formValue = this.form.value;
    const from = formValue.selectedDate.setHours(formValue.startHour);
    const to = formValue.selectedDate.setHours(formValue.endHour);
    const newSlot = [
      {
        endDate: new Date(to).toISOString(),
        roundUp: true,
        startDate: new Date(from).toISOString()
      }
    ];
    const formValueJson = JSON.stringify(newSlot);
    this.userService.sendTimeSlots(this.user.id, formValueJson).subscribe(
      data => {
        this.user.userTimeSlots = data;
        this.timeToLocaleSlots(this.user.userTimeSlots);
        this.form.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    for (let i = this.convenientTime.from; i <= this.convenientTime.to; i++) {
      this.convenientTimeArray.push(i);
    }
  }
}
