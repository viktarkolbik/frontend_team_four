import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/types/candidate';

@Component({
  selector: 'ia-techexpert',
  templateUrl: './techexpert.component.html',
  styleUrls: ['./techexpert.component.scss']
})
export class TechexpertComponent implements OnInit {

  error?: number;
  interns = [] as Candidate[];
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      (data) => {
        if (data.interns.error) {
          this.error = data.interns.status;
        } else {
          this.interns = data.interns;
        }
      }
    )
   }

  ngOnInit(): void {
  }

}
