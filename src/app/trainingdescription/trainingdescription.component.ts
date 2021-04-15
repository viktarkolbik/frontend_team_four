import {Component, OnInit} from '@angular/core';
import {InternshipsService} from '../core/internships.service';
import {Internship} from '../types';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ia-trainingdescription',
  templateUrl: './trainingdescription.component.html',
  styleUrls: ['./trainingdescription.component.scss']
})
export class TrainingdescriptionComponent implements OnInit {

  internship: Internship;
  duration = 0;

  constructor(private internshipsService: InternshipsService, private route: ActivatedRoute) {
    this.internship = route.snapshot.data.internship;
  }

  ngOnInit(): void {
      const difference = Date.parse(this.internship.endDate) - Date.parse(this.internship.startDate);
      const msecondsInDay = 86400000;
      this.duration = difference / msecondsInDay;
  }
}
