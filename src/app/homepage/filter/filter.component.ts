import { KeyValue } from '@angular/common';
import { ContentChild } from '@angular/core';
import {Component, ElementRef, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Criterion, Filter, Training} from '../../types';

@Component({
  selector: 'ia-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnChanges{
  @Input() trainings!: Training[];
  @Output() onFilterTrainings: EventEmitter<Training[]> = new EventEmitter<Training[]>();
  filters: {[key: string]: Filter} = {};
  cities?: string[];
  technologies?: string[];
  removable = true;
  selectable = true;
  constructor() {
  }
  ngOnChanges(){
    this.onFilterTrainings.emit(this.trainings);
    const setCities = new Set(this.trainings.map(training => training.city));
    this.cities = Array.from(setCities);
    const setTechnologies = new Set(this.trainings.map(training => training.technology));
    this.technologies = Array.from(setTechnologies);
    this.filters.locations = this.getFilter('city', this.cities);
    this.filters.technologies = this.getFilter('technology', this.technologies);
    console.dir(this.filters);
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
  updateTrainings(){
    this.onFilterTrainings.emit(
      this.trainings.filter(
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
        return condition;
      }
    ));
  }

  removeCityFilter(city: string){
    return this.filters.locations.criteria[city].isChecked = !this.filters.locations.criteria[city].isChecked;
  }

  removeTechFilter(tech: string){
    return this.filters.technologies.criteria[tech].isChecked = !this.filters.technologies.criteria[tech].isChecked;
  }
}
