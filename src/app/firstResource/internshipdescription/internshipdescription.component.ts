import {Component, OnInit} from '@angular/core';
import {InternshipsService} from '../../core/services/internships.service';
import {Internship} from '../../types';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'ia-internshipdescription',
  templateUrl: './internshipdescription.component.html',
  styleUrls: ['./internshipdescription.component.scss']
})
export class InternshipdescriptionComponent implements OnInit {

  internship: Internship | any;
  techSkills?: string;
  requirements?: string;
  duration = 0;
  error: number | undefined;
  errorMessage: string | undefined;

  constructor(
    private internshipsService: InternshipsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router) {
    const answer = route.snapshot.data.internship;

    if (!answer.error) {
      this.internship = answer;
    }
    else {
      this.error = answer.status;
      this.errorMessage = answer.error.message;
      this.router.navigate(['']);
      if (this.errorMessage != null) {
        this.snackBar.open(`Ошибка ${this.error} - Стажировка с таким ID не найдена`, 'Ok');
      }
    }
  }

  ngOnInit(): void {
    if (!this.error){ 
      const difference = Date.parse(this.internship.endDate) - Date.parse(this.internship.startDate);
      const msecondsInDay = 86400000;
      this.duration = difference / msecondsInDay;

      this.techSkills = this.internship.techSkills.split(";")
      this.requirements = this.internship.requirements.split(";")
      console.log(this.requirements);
    }
  }
}
