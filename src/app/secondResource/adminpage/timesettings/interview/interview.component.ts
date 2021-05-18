import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ia-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  @Input() interview: any;
  constructor() { }

  ngOnInit(): void {
  }

}
