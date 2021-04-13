import { Component, OnInit } from '@angular/core';
import { Training } from '../types';
import { InternshipsService } from '../core/internships.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[] | undefined;

  constructor(private internshipsService: InternshipsService, private route: ActivatedRoute) {
    this.route.data.subscribe((data) => this.trainings = data.internships);
  }
  ngOnInit(): void {}
}
