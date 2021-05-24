import { Component, Input, OnInit } from '@angular/core';
import { Interview } from '../../../../types/candidate';
import { User } from '../../../../types/user';

@Component({
  selector: 'ia-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  @Input() interview!: Interview;
  @Input() user!: User;
  startTime: string | undefined = '';
  endTime: string | undefined = '';
  constructor() {
    this.startTime = ' ';
  }

  ngOnInit(): void {
    if (this.user.userRole === 'ADMIN') {
      this.startTime = this.interview.adminInterviewDate;
    } else if (this.user.userRole === 'TECH_EXPERT') {
      this.endTime = this.interview.techInterviewDate;
    }
    this.endTime = new Date(
      //@ts-ignore
      Date.parse(this.startTime) + this.user.interviewTime * 60 * 1000
    ).toISOString();
  }
}
