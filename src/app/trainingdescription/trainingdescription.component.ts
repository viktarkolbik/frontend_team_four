import { Component, OnInit } from '@angular/core';
import { DescriptionService } from '../core/description-service.service';
import { Internship } from '../types';


@Component({
  selector: 'ia-trainingdescription',
  templateUrl: './trainingdescription.component.html',
  styleUrls: ['./trainingdescription.component.scss']
})
export class TrainingdescriptionComponent implements OnInit {

  internships!: Internship[]

  constructor(private descriptionServ: DescriptionService) { }

  ngOnInit(): void {
    this.descriptionServ.getInternshipList().subscribe(internships => {
      this.internships = internships;
      console.log('internships', this.internships)
    });
  }

}
