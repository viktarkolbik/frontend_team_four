import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ia-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {
  @Input() slot: any;
  constructor() {}

  ngOnInit(): void {}
}
