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
  trainings: Training[];

  constructor(private internshipsService: InternshipsService, private route: ActivatedRoute) {
    this.trainings = this.internshipsService.getTrainingsLocal();
    console.log(this.internshipsService.getTrainingsLocal());
  }
  ngOnInit(): void {
    this.route.data.subscribe((data) => console.log(data.internships));
  }
}
