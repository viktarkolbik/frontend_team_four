import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Internship} from '../../../types';
import {InternshipsService} from '../../../core/services/internships.service';

@Component({
  selector: 'ia-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  internships = [] as Internship[];
  filteredInternships = [] as Internship[];
  error?: number;

  constructor(private route: ActivatedRoute, private internshipservice: InternshipsService) {
    this.route.data.subscribe(
      (data) => {
        if (data.internships.error) {
          this.error = data.internships.status;
        } else {
          this.internships = data.internships;
          this.filteredInternships = data.internships;
        }
      }
    );
  }
  ngOnInit(): void {
  }
  updateInternships(internships: Internship[]) {
    this.filteredInternships = internships;
  }

  updateListIShips(id: string) {
    this.internshipservice.deleteInternshipById(id)
      .subscribe(()=>{
        this.filteredInternships = this.filteredInternships.filter(internship=> internship.id !== id);
        this.internshipservice.getInternshipList();
      });
  }
}
