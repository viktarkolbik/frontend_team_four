import {Component, Input, OnInit} from '@angular/core';
import {Training} from '../../../types';

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent {
  @Input() training!: Training;
  constructor() {
  }
}
