import { Component, OnInit } from '@angular/core';
import { Training } from '../types';
import {DescriptionService} from '../core/description-service.service';


@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[];

  constructor(private trainingsService: DescriptionService) {
    this.trainings = this.trainingsService.getTrainingsLocal();
  }
  ngOnInit(): void {
    this.trainingsService.getInternshipList().subscribe((data) => console.log(data));
  }
}
