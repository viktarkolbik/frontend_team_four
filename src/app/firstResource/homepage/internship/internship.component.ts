import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Internship} from '../../../types';

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnChanges{
  @Input() training!: Internship;
  imgUrl = "";
  constructor() {    
  }

  images: any = {
    JS: "../../../../assets/icons/JS.svg",
    JAVA: "../../../../assets/icons/java.png",
    GO: "../../../../assets/icons/go.png",
    QA: "../../../../assets/icons/qa.jpg",
    DEV_OPS: "../../../../assets/icons/devops.png",
    C_PLUS_PLUS: "../../../../assets/icons/c.png",
    C_SHARP: "../../../../assets/icons/s-sharp.jpg"
  }
  ngOnChanges() {
    this.imgUrl = this.pushImgUrl(this.training.skills[0]);
  }
  pushImgUrl(condition: string) {
    if (this.training.skills.includes(condition)) {
      return this.images[condition]
      } 
  }
}
