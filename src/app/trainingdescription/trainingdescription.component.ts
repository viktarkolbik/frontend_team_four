import { Component, OnInit } from '@angular/core';
import { InternshipsService } from '../core/internships.service';
import { Internship } from '../types';

@Component({
  selector: 'ia-trainingdescription',
  templateUrl: './trainingdescription.component.html',
  styleUrls: ['./trainingdescription.component.scss']
})
export class TrainingdescriptionComponent implements OnInit {

  internship!: Internship;
  duration: string = "";
  

  constructor(private internshipsService: InternshipsService) { }

  ngOnInit(): void {
    this.internshipsService.getInternshipList().subscribe(internships => {
      this.internship = internships[0];

      const difference = Date.parse(this.internship.endDate) - Date.parse(this.internship.startDate);
      this.duration = String(difference/86400000);
    }); 
  }
}
