import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Internship} from '../../../../types';
import {InternshipsService} from '../../../../core/services/internships.service';

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  @Input() internship!: Internship;
  // @Output() remove: EventEmitter<Internship> = new EventEmitter<Internship>();
  constructor(private internshipservice: InternshipsService) { }

  ngOnInit(): void {
  }

  remove(id: string) {
      this.internshipservice.deleteInternshipById(id)
        .subscribe(()=>{
    this.internshipservice.getInternshipList();
  })
}
}
