import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Internship} from '../../../types';

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnChanges{
  @Input() training!: Internship;
  imgUrles: string[] = [];
  constructor() {    
  }

  images: { [key: string]: string } = {
    JS: "../../../../assets/icons/js.png",
    JAVA: "../../../../assets/icons/java.png",
    GO: "../../../../assets/icons/go.png",
    QA: "../../../../assets/icons/qa.jpg",
    DEV_OPS: "../../../../assets/icons/devops.png",
    C_PLUS_PLUS: "../../../../assets/icons/c.png",
    C_SHARP: "../../../../assets/icons/s-sharp.jpg"
  }
  ngOnChanges() {
    this.imgUrles = this.training.skills.map(skill => this.images[skill]).filter(Boolean);
  }
}
