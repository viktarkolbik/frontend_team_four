import { Component,OnInit } from '@angular/core';
import { FormsService } from 'src/app/core/services/forms.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { Candidate } from 'src/app/types/candidate';

@Component({
  selector: 'ia-internlist',
  templateUrl: './internlist.component.html',
  styleUrls: ['./internlist.component.scss']
})

export class InternlistComponent implements  OnInit {
  mockInterns: Candidate[] = [
    {
      city: 'Vitebsk',
      country: 'Belarus',
      education: 'Higher',
      email: 'backmail@gmail.com',
      englishLevel: 'C1',
      experience: 'none',
      filePath: 'none',
      firstName: 'Misha',
      formStatus: 'REGISTERED',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      interview: {
        admin: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        adminFeedback: '',
        adminInterviewDate: '',
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        techFeedback: '',
        techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        techInterviewDate: ''
      },
      lastName: 'Yakovlev',
      middleName: 'Valerievich',
      phoneNumber: '+375449726680',
      primarySkill: 'JAVA',
      skype: 'mihanya44',
      timeForCallList: [{
        endHour: 15,
        startHour: 10
      }]
    },
    {
      city: 'Minsk',
      country: 'Belarus',
      education: 'Higher',
      email: 'easyman@gmail.com',
      englishLevel: 'B2',
      experience: 'none',
      filePath: 'none',
      firstName: 'Pasha',
      formStatus: 'REGISTERED',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      interview: {
        admin: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        adminFeedback: '',
        adminInterviewDate: '',
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        techFeedback: '',
        techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        techInterviewDate: ''
      },
      lastName: 'Borisov',
      middleName: 'Victorovich',
      phoneNumber: '+375445432217',
      primarySkill: 'JavaScript',
      skype: 'pavel21',
      timeForCallList: [{
        endHour: 15,
        startHour: 10
      }]
    }
  ]
  userId = '';
  interns = [] as Candidate[];

  constructor(private FormsService: FormsService, private storageService: StorageService) {
  }

  ngOnInit() {
    this.userId = this.storageService.getUserId() || '';
    this.FormsService.getCandidatesListByUserId(this.userId).subscribe(candidates => this.interns = candidates)
  }

}
 

