import { Component, OnInit } from '@angular/core';
import { InternshipsService } from '../core/internships.service';
import { Internship } from '../types';

@Component({
  selector: 'ia-trainingdescription',
  templateUrl: './trainingdescription.component.html',
  styleUrls: ['./trainingdescription.component.scss']
})
export class TrainingdescriptionComponent implements OnInit {

  internships: Internship[] = [];
  duration: string = "";
  difference: number = 0;

  constructor(private internshipsService: InternshipsService) { }

  ngOnInit(): void {
    this.internshipsService.getInternshipList().subscribe(internships => {
      this.internships = internships;
      console.log('internships', this.internships);

      this.difference = Date.parse(this.internships[0].endDate) - Date.parse(this.internships[0].startDate);
      this.duration = String(this.difference/86400000);
    }); 
  }
}
