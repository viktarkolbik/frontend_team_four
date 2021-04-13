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

  internship!: Internship;

  constructor(private internshipsService: InternshipsService, private route: ActivatedRoute) {
    this.route.data.subscribe((data) => this.internship = data.internship);
  }

  ngOnInit(): void {
  }
}
