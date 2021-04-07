import { Component, OnInit } from '@angular/core';
import { Training } from '../types';
import { InternshipsService } from '../core/internships.service';


@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[];

  constructor(private internshipsService: InternshipsService) {
    this.trainings = this.internshipsService.getTrainingsLocal();
  }
  ngOnInit(): void {
    this.internshipsService.getInternshipList().subscribe((data) => console.log(data));
  }
}
