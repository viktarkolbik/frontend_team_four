import {Component, Input, OnInit} from '@angular/core';
import {Interview} from '../../../../types/candidate';
import {User} from '../../../../types/user';

@Component({
  selector: 'ia-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  @Input() interview!: Interview ;
  @Input() user!: User;
  startTime: string = "";
  endTime: string= "";
  constructor() { }

  ngOnInit(): void {
    if(this.user.userRole === "ADMIN") {
      this.startTime = this.interview.adminInterviewDate!
    }
    else if (this.user.userRole === "TECH_EXPERT") {
      this.startTime = this.interview.techInterviewDate!
    }
    this.endTime = new Date(
      Date.parse(this.startTime) + this.user.interviewTime*60*1000)
      .toISOString();
  }

}
