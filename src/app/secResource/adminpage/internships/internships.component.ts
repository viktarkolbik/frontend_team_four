import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Internship, Training} from '../../../types';

@Component({
  selector: 'ia-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  internships = [] as Internship[];
  error?: number;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      (data) => {
        if (data.internships.error) {
          this.error = data.internships.status;
        } else {
          this.internships = data.internships;
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
