import { Component, OnInit } from '@angular/core';
import { Internlist } from '../../types/internlist';
import {FormsService} from '../../core/forms.service';
import {Candidate} from '../../types/candidate';

@Component({
  selector: 'ia-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {
  candidates?: Candidate[];
  selectedCandidate!: Candidate;
  selectedRecruiter = '';
  selectedTechspecialist = '';
  recruitersList = [
    'Maxim',
    'Bogdan',
    'Andrey',
    'Viktor'
  ];

  constructor(private formService: FormsService) {
    this.formService.getCandidatesList().subscribe((data) => {
      this.candidates = data;
    });
  }
  updateSelectedCandidate(candidate: Candidate){
    this.selectedCandidate = candidate;
  }
  ngOnInit(): void {
  }
  approve(){
    this.selectedCandidate.formStatus='APPROVE';
  }
}
