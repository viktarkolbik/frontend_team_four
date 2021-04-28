import { Component, Input } from '@angular/core';
import { Internship } from '../../types';

@Component({
  selector: 'ia-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent {
  // @ts-ignore 
  @Input() training: Internship = {};
  constructor() {
  }
}
