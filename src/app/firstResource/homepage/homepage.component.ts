import { Component, OnInit } from '@angular/core';
import { Training } from '../../types';
import { InternshipsService } from '../../core/services/internships.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[] | any;
  filteredTrainings!: Training[];
  error: number | undefined;

  constructor(private internshipsService: InternshipsService, private route: ActivatedRoute) {
    this.route.data.subscribe((data) => this.trainings = data.internships);
    if (this.trainings.error) {
      this.error = this.trainings.status;
    }
  }

  ngOnInit(): void {
  }

  updateTrainings(trainings: Training[]) {
    this.filteredTrainings = trainings;
  }
}
