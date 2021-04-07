import {Component, Input, OnInit} from '@angular/core';
import {Training} from '../../core/trainings/trainings.service';

@Component({
  selector: 'ia-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent {
  @Input() training!: Training;
  constructor() {
  }
}
