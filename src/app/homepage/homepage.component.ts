import { Component, OnInit } from '@angular/core';
import { Training } from '../types';
import { InternshipsService } from '../core/internships.service';

interface Filter {
  field: string;
  value: string;
  isChecked: boolean;
}
@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[];
  cities: string[];
  technologies: string[];
  filterParametrs = {
    locations: {},
    technologies: {},
  };
  filterParameterList: Filter[];
  filteredTechnologies: Training[];
  constructor(private internshipsService: InternshipsService) {
    this.trainings = this.internshipsService.getTrainingsLocal();
    this.filteredTechnologies = this.trainings;
    let set = new Set(this.trainings.map(training => training.city));
    this.cities = Array.from(set);
    set = new Set(this.trainings.map(training => training.technology));
    this.technologies = Array.from(set);
    for(const city of this.cities){
      // @ts-ignore
      this.filterParametrs.locations[city] = {
        field: 'city',
        value: city,
        isChecked: true,
      };
    }
    for(const technology of this.technologies){
      // @ts-ignore
      this.filterParametrs.technologies[technology] = {
        field: 'technology',
        value: technology,
        isChecked: false,
      };
    }
    this.filterParameterList = [].concat(
      Object.values(this.filterParametrs.locations),
      Object.values(this.filterParametrs.technologies)
    );
  }
  ngOnInit(): void {
    this.internshipsService.getInternshipList().subscribe((data) => console.log(data));
  }
  updateTrainings(){
    this.filteredTechnologies = [];
    this.trainings.forEach((training) => {
      for (const filter of this.filterParameterList){
        // @ts-ignore
        if(filter.isChecked && training[filter.field] === filter.value){
          this.filteredTechnologies.push(training);
          break;
        }
      }
    });
  }
}
