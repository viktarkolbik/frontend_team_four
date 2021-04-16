import { Component, OnInit } from '@angular/core';
import {Criterion, Filter, Training} from '../types';
import { InternshipsService } from '../core/internships.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[] | any;
  filteredTrainings!: Training[];
  error: number | undefined;
  errorMessage: string | undefined;

  constructor(private internshipsService: InternshipsService, private route: ActivatedRoute) {
    this.route.data.subscribe((data) => this.trainings = data.internships);
    if (this.trainings.error) {
      this.error = this.trainings.status;
      this.errorMessage = "Что то пошло не так попробуйте обновить страницу";
      console.log (this.error, this.errorMessage);
    }
  }

  ngOnInit(): void {
  }

  updateTrainings(trainings: Training[]) {
    this.filteredTrainings = trainings;
  }
}
