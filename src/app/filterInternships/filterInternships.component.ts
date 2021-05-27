import {Component,  EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Criterion, Filter, Internship, Location} from '../types';
import {InternshipsService} from "../core/services/internships.service";

@Component({
  selector: 'ia-filter-internships',
  templateUrl: './filterInternships.component.html',
  styleUrls: ['./filterInternships.component.scss']
})
export class FilterInternshipsComponent implements OnChanges{
  @Input() internships!: Internship[];
  @Output() filterInternships: EventEmitter<Internship[]> = new EventEmitter<Internship[]>();
  filters: {[key: string]: Filter} = {};
  cities?: string[];
  technologies?: string[];
  countries?: string[];
  removable = true;
  selectable = true;
  constructor(private internshipService: InternshipsService) {
  }
  ngOnChanges(){
    const setCities = (this.internships.map(internship => internship.locations).flat());
    const setCitiesArray = new Set(setCities.map(location => location.city.name));
    this.cities = Array.from(setCitiesArray);
    const setTechnologiesArray = this.internships.map(internship => internship.skills);
    const setTechnologies = new Set(setTechnologiesArray.flat());
    this.technologies = Array.from(setTechnologies);
    this.countries = Array.from(new Set(setCities.map(location => location.country.name)));
    // @ts-ignore
    this.filters.countries = this.getFilter('country', this.countries);
    this.filters.cities = this.getFilter('city', this.cities);
    this.filters.technologies = this.getFilter('skills', this.technologies);
  }
  getChangeSkill(skill: string): string {
    return this.internshipService.getChangedSkills(skill);
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
    this.filterInternships.emit(
      this.internships.filter(
      (internship) => {
        let condition = false;
        const filters = Object.values(this.filters);
        for (const filter of filters) {
          const filterCriteria: Criterion[] = Object.values(filter.criteria);
          filter.isChecked = filterCriteria.some(criterion => criterion.isChecked);
          condition = (filter.isChecked) ?
            filterCriteria.some(criterion => {
              // @ts-ignore
              if(Array.isArray(internship[filter.field])){
                // @ts-ignore
                return criterion.isChecked && internship[filter.field].includes(criterion.value);
              }
              else{
                // @ts-ignore
                return (criterion.isChecked && internship.locations.map(location => location[filter.field].name.includes(criterion.value))
                  .some(location => location === true));
              }
        }) : true;
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
