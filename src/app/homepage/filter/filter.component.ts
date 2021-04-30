import {Component,  EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Criterion, Filter, Internship, Location} from '../../types';

@Component({
  selector: 'ia-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnChanges{
  @Input() trainings!: Internship[];
  @Output() onFilterTrainings: EventEmitter<Internship[]> = new EventEmitter<Internship[]>();
  filters: {[key: string]: Filter} = {};
  cities?: string[];
  technologies?: string[];
  countries?: string[];
  removable = true;
  selectable = true;
  constructor() {
  }
  ngOnChanges(){
    this.onFilterTrainings.emit(this.trainings);
    const setCities = (this.trainings.map(training => training.locations).flat());
    const setCitiesArray = new Set(setCities.map(location => location.city.name))
    this.cities = Array.from(setCitiesArray);
    const setTechnologiesArray = this.trainings.map(training => training.skills);
    const setTechnologies = new Set(setTechnologiesArray.flat());
    this.technologies = Array.from(setTechnologies);
    this.countries = Array.from(new Set(setCities.map(location => location.country.name)));
    // @ts-ignore
    this.filters.countries = this.getFilter('country', this.countries);
    this.filters.cities = this.getFilter('city', this.cities);
    this.filters.technologies = this.getFilter('skills', this.technologies);
    console.log(this.filters)
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
              // criterion.isChecked && training[filter.field].includes(criterion.value) 
              criterion.isChecked && training.locations.map(location => location[filter.field].name.includes(criterion.value)).some(location => location === true)
            )) : true;
          if(!condition){ break; }
        }
        return condition;
      }
    ));
  }

  removeFilter(data: any, condition: string){
    this.filters[data].criteria[condition].isChecked = !this.filters[data].criteria[condition].isChecked;
    this.updateTrainings();
  }
}
