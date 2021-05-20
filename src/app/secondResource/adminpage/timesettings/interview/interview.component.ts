import {Component, Input, OnInit} from '@angular/core';
import {Interview} from '../../../../types/candidate';

@Component({
  selector: 'ia-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  @Input() interview: Interview | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
