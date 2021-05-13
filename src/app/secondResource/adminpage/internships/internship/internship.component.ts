import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Internship} from '../../../../types';
import {InternshipsService} from '../../../../core/services/internships.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  @Input() internship!: Internship;

  constructor(private internshipservice: InternshipsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  remove(id: string): void {
    this.internshipservice.deleteInternshipById(id)
      .subscribe(() => {
        this.internshipservice.getInternshipList();
      });
  }
  updateStatus(id: string): void {
    this.internshipservice.deleteInternshipById(id)
      .pipe(switchMap(() => this.route.params))
      .pipe(switchMap((data) => this.internshipservice.getInternshipList()))
      .subscribe(() => this.internshipservice.getInternshipList());
  }
}
