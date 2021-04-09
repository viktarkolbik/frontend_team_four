import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Training } from '../types';
import { InternshipsService } from '../core/internships.service';
import { MatOptionSelectionChange } from '@angular/material/core';


@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  trainings: Training[];
  filtered!: Training[];

  constructor(private internshipsService: InternshipsService) {
    this.trainings = this.internshipsService.getTrainingsLocal();
  }

  ngOnInit(): void {
    this.internshipsService.getInternshipList().subscribe((data) => console.log(data));
  }

  filterLocation(event: any){
    const locale = event.source.value;
    console.log(event);
    if(event.source._selected){
      this.filtered = this.trainings.filter(item => item.city.toLowerCase().includes(locale.split(' ')[1]));
      return this.filtered;
    }
    this.filtered = this.trainings;
    return this.filtered;
  }

  filterTech(event: any){
    if(event.source._selected){
      const tech = event.source.value;
      this.filtered = this.trainings.filter(item => item.technology.toLowerCase().includes(tech));
      return this.filtered;
    }
    this.filtered = this.trainings;
    return this.filtered;
  }
}
