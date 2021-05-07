import {Component, Input, OnInit} from '@angular/core';
import {Internship} from '../../../../types';
import {InternshipsService} from '../../../../core/services/internships.service';


@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  @Input() internship!: Internship;
  skills: string[] = [];
  constructor(private internshipService: InternshipsService) { }

  ngOnInit(): void {
    this.skills = this.internship.skills.map(skill => this.internshipService.getChangedSkills(skill));
    console.log(this.skills)
  }

}
