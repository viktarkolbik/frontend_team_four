import { Component, OnInit } from '@angular/core';
import {Training, TrainingsService} from '../core/trainings/trainings.service';


@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[];

  constructor(private trainingsService: TrainingsService) {
    this.trainings = this.trainingsService.getTrainingsLocal();
  }
  ngOnInit(): void {
    this.trainingsService.getTrainings().subscribe((data) => console.log(data));
  }
}
