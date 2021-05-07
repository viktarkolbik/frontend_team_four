import {InternshipsService} from "../../../core/services/internships.service"
import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Internship} from '../../../types';

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnChanges{
  @Input() training!: Internship;
  imgUrles: string[] = [];
  skills: string[] = [];
  constructor(private internshipService: InternshipsService) {  
  }

  changedSkills: { [key: string]: string } = {
    DEV_OPS: " DevOps",
    C_PLUS_PLUS: " C++",
    C_SHARP: " C#",
    JS: " JavaScript",
    JAVA: " Java",
    GO: " Golang",
    QA: " QA"
  }
  ngOnChanges() {
    this.imgUrles = this.training.skills.map(skill => this.internshipService.getImagesUrl(skill)).filter(Boolean);
    
    this.skills = this.training.skills.map(skill => this.changedSkills[skill]);
  }
}
