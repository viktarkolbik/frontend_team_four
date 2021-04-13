import { Component, OnInit } from '@angular/core';
import { Training } from '../types';
import { InternshipsService } from '../core/internships.service';

interface Criterion {
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
    locations: {
      field: 'city',
      isChecked: false,
      criteria: {},
    },
    technologies: {
      field: 'technology',
      isChecked: false,
      criteria: {},
    },
  };
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
      this.filterParametrs.locations.criteria[city] = {
        value: city,
        isChecked: true,
      };
    }
    for(const technology of this.technologies){
      // @ts-ignore
      this.filterParametrs.technologies.criteria[technology] = {
        value: technology,
        isChecked: false,
      };
    }
  }
  ngOnInit(): void {
    this.internshipsService.getInternshipList().subscribe((data) => console.log(data));
  }
  updateTrainings(){
    this.filteredTechnologies = [];
    this.trainings.forEach((training) => {
      let condition = false;
      const filterParameters = Object.values(this.filterParametrs);
      for(const filter of filterParameters){
        const filterCriteria: Criterion[] = Object.values(filter.criteria);
        filter.isChecked = filterCriteria.some(criterion => criterion.isChecked);
        if(filter.isChecked){
          condition = filterCriteria.some(criterion => {
            // @ts-ignore
            if(criterion.isChecked && training[filter.field] === criterion.value){
              return true;
            }
            return false;
          });
        }
        else { condition = true; }
        if(!condition){ break; }
      }
      if(condition){
        this.filteredTechnologies.push(training);
      }
    });
  }
}
