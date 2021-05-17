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
  @Output() deletingInternship: EventEmitter<string> = new EventEmitter<string>();

  constructor(private internshipservice: InternshipsService) {
  }

  ngOnInit(): void {}

  remove(id: string): void {
    this.internshipservice.deleteInternshipById(id)
      .subscribe(()=>{
        this.internshipservice.getInternshipList();
      })
    this.deletingInternship.emit(id);
  }

}
