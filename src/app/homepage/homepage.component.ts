import { Component, OnInit } from '@angular/core';
import {Criterion, Filter, Training} from '../types';
import { InternshipsService } from '../core/internships.service';

@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[];
  cities: string[];
  technologies: string[];
  filters: {[key: string]: Filter} = {};
  filteredTrainings: Training[];
  constructor(private internshipsService: InternshipsService) {
    this.trainings = this.internshipsService.getTrainingsLocal();
    this.filteredTrainings = this.trainings;
    let set = new Set(this.trainings.map(training => training.city));
    this.cities = Array.from(set);
    set = new Set(this.trainings.map(training => training.technology));
    this.technologies = Array.from(set);
    this.filters.locations = this.getFilter('city', this.cities);
    this.filters.technologies = this.getFilter('technology', this.technologies);
  }
  getFilter(field: string, criteria: string[]): Filter{
    const filter: Filter = {
      field,
      isChecked: false,
      criteria: {}
    };
    for(const criterion of criteria){
      // @ts-ignore
      filter.criteria[criterion] = {
        value: criterion,
        isChecked: false,
      };
    }
    return filter;
  }
  ngOnInit(): void {
    this.internshipsService.getInternshipList().subscribe((data) => console.log(data));
  }
  updateTrainings(){
    this.filteredTrainings = this.trainings.filter(
      (training) => {
        let condition = false;
        const filters = Object.values(this.filters);
        for (const filter of filters) {
          const filterCriteria: Criterion[] = Object.values(filter.criteria);
          filter.isChecked = filterCriteria.some(criterion => criterion.isChecked);
          condition = (filter.isChecked) ?
            filterCriteria.some(criterion => (
              // @ts-ignore
              criterion.isChecked && training[filter.field] === criterion.value
            )) : true;
          if(!condition){ break; }
        }
        return condition ? true : false;
      }
    );
  }
}
