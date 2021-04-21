import {Component, Input, OnInit} from '@angular/core';
import {Internship, Training} from "../../../../types";

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  @Input() internship!: Internship;
  constructor() { }

  ngOnInit(): void {
  }

}
