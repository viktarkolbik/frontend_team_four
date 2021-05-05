import { Component, OnInit } from '@angular/core';
import { InterviewService } from 'src/app/core/services/interview.service';
import { Interview } from 'src/app/types/candidate';

@Component({
  selector: 'ia-internlist',
  templateUrl: './internlist.component.html',
  styleUrls: ['./internlist.component.scss']
})
export class InternlistComponent implements OnInit {

  interviewList = [] as Interview[];
  constructor(interviewService: InterviewService) { 
  }

  ngOnInit(): void {
  }

}
