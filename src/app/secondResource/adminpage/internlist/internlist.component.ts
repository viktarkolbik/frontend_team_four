import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../../../core/services/interview.service';
import { Interview } from '../../../types/interview';

@Component({
  selector: 'ia-internlist',
  templateUrl: './internlist.component.html',
  styleUrls: ['./internlist.component.scss']
})
export class InternlistComponent implements OnInit {
  mockInterviewList = [
    {
      admin: '20981ffb-2aa8-41fe-a631-2c6f225bb1e1',
      adminFeedback: 'There is no feedback yet',
      adminInterviewDate: '2021-05-05T10:11:42.438Z',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      techFeedback: 'There is no feedback yet',
      techInterviewDate: '2021-05-05T10:11:42.438Z',
      techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    },
    {
      admin: '20981ffb-2aa8-41fe-a631-2c6f225bb1e1',
      adminFeedback: 'There is no feedback yet',
      adminInterviewDate: '2021-05-05T10:11:42.438Z',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      techFeedback: 'There is no feedback yet',
      techInterviewDate: '2021-05-05T10:11:42.438Z',
      techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    },{
      admin: '20981ffb-2aa8-41fe-a631-2c6f225bb1e1',
      adminFeedback: 'There is no feedback yet',
      adminInterviewDate: '2021-05-05T10:11:42.438Z',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      techFeedback: 'There is no feedback yet',
      techInterviewDate: '2021-05-05T10:11:42.438Z',
      techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    }
  ]; 

  interviewList = [] as Interview[];
  constructor(interviewService: InterviewService) { 
  }

  ngOnInit(): void {
  }

}
