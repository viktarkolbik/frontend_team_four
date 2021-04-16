import {Component, OnInit} from '@angular/core';
import {InternshipsService} from '../core/internships.service';
import {Internship} from '../types';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'ia-trainingdescription',
  templateUrl: './trainingdescription.component.html',
  styleUrls: ['./trainingdescription.component.scss']
})
export class TrainingdescriptionComponent implements OnInit {

  internship: Internship | any;
  duration = 0;
  error: number | undefined;
  errorMessage: string | undefined;

  constructor(private internshipsService: InternshipsService, private route: ActivatedRoute) {
    const answer = route.snapshot.data.internship;
    if (!answer.error) {
      this.internship = answer;
    }
    else {
      this.error = answer.status;
      this.errorMessage = answer.error.message;
      console.log (this.error, this.errorMessage);
    }
  }

  ngOnInit(): void {
    if (!this.error) {
      const difference = Date.parse(this.internship.endDate) - Date.parse(this.internship.startDate);
      const msecondsInDay = 86400000;
      this.duration = difference / msecondsInDay;
    }
  }
}
