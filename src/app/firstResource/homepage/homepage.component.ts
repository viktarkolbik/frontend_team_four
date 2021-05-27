import { Component, OnInit } from '@angular/core';
import { Internship } from '../../types';
import { InternshipsService } from '../../core/services/internships.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  internships: Internship[] | any;
  filteredInternships!: Internship[];
  error: number | undefined;

  constructor(
    private internshipsService: InternshipsService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(data => {
      this.internships = data.internships;
      this.filteredInternships = data.internships;
    });
    if (this.internships.error) {
      this.error = this.internships.status;
    }
  }

  ngOnInit(): void {}

  updateTrainings(internships: Internship[]) {
    this.filteredInternships = internships;
  }
}
