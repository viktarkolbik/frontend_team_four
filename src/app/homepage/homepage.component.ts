import { Component, OnInit } from '@angular/core';
import { Training } from '../types';
import { InternshipsService } from '../core/internships.service';

@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  trainings: Training[];
  filtered!: Training[];

  activeFilters = {
    countryFilter: false,
    cityFilter: false,
    techFilter: false
  }

  filtersState = [
    {
      html: false,
      javascript: false,
      css: false,
    },
    {
      belarus: false,
      russia: false,
      ukraine: false,
    },
    {
      minsk: false,
      gomel: false,
      brest: false,
      kiev: false,
      chernigov: false,
      harkov: false,
      moscow: false,
    },
  ]

  constructor(private internshipsService: InternshipsService) {
    this.trainings = this.internshipsService.getTrainingsLocal();
  }

  ngOnInit(): void {
    this.internshipsService
      .getInternshipList()
      .subscribe((data) => console.log(data));
  }

  filterCountry(array: Training[]) {
    let countries: Training[] = [];
    if (this.filtersState[1].belarus) {
        array.forEach(item => {
        if(item.country.toLowerCase() === 'belarus'){
          countries.push(item);
        }})
      }
    if (this.filtersState[1].russia) {
        array.forEach(item => {
        if(item.country.toLowerCase() === 'russia'){
          countries.push(item);
        }})
      }
    if (this.filtersState[1].ukraine) {
        array.forEach(item => {
        if(item.country.toLowerCase() === 'ukraine'){
          countries.push(item);
        }})
      }
     return countries;
  }

  filterCity(array: Training[]) {
    let cities: Training[] = [];
    if (this.filtersState[2].minsk) {
      array.forEach(item => {
      if(item.city.toLowerCase() === 'minsk'){
        cities.push(item);
      }})
    }
    if (this.filtersState[2].gomel) {
      array.forEach(item => {
      if(item.city.toLowerCase() === 'gomel'){
        cities.push(item);
      }})
    }
    if (this.filtersState[2].brest) {
      array.forEach(item => {
      if(item.city.toLowerCase() === 'brest'){
        cities.push(item);
      }})
    }
    if (this.filtersState[2].kiev) {
      array.forEach(item => {
      if(item.city.toLowerCase() === 'kiev'){
        cities.push(item);
      }})
    }
    if (this.filtersState[2].chernigov) {
      array.forEach(item => {
      if(item.city.toLowerCase() === 'chernigov'){
        cities.push(item);
      }})
    }
    if (this.filtersState[2].harkov) {
      array.forEach(item => {
      if(item.city.toLowerCase() === 'harkov'){
        cities.push(item);
      }})
    }
    if (this.filtersState[2].moscow) {
      array.forEach(item => {
      if(item.city.toLowerCase() === 'moskow'){
        cities.push(item);
      }})
    }
    return cities;
  }

  filterTech(array: Training[]) {
    let tech: Training[] = [];
    if (this.filtersState[0].css) {
        array.forEach(item => {
        if(item.technology.toLowerCase() === 'css'){
          tech.push(item);
        }})
      }
    if (this.filtersState[0].html) {
        array.forEach(item => {
        if(item.technology.toLowerCase() === 'html'){
          tech.push(item);
        }})
      }
    if (this.filtersState[0].javascript) {
        array.forEach(item => {
        if(item.technology.toLowerCase() === 'javascript'){
          tech.push(item);
        }})
      }
    return tech;
  }

  checkFilters(){
    let country = Object.values(this.filtersState[1]).some(item => item === true);
    let city = Object.values(this.filtersState[2]).some(item => item === true);
    let tech = Object.values(this.filtersState[0]).some(item => item === true);
    this.activeFilters.countryFilter = country;
    this.activeFilters.cityFilter = city;
    this.activeFilters.techFilter = tech;
  }

  triggerFilters(){
    this.checkFilters();
    let country: Training[] = [];
    let city: Training[] = [];
    if(Object.values(this.activeFilters).every(item => item === true)){
      country = this.filterCountry(this.trainings);
      city = this.filterCity(country);
      this.filtered = this.filterTech(city);
    }
    if(this.activeFilters.countryFilter && this.activeFilters.cityFilter && !this.activeFilters.techFilter){
      country = this.filterCountry(this.trainings);
      this.filtered = this.filterCity(country);
    }
    if(this.activeFilters.countryFilter && this.activeFilters.techFilter && !this.activeFilters.cityFilter){
      country = this.filterCountry(this.trainings);
      this.filtered = this.filterTech(country);
    }
    if(this.activeFilters.cityFilter && this.activeFilters.techFilter && !this.activeFilters.countryFilter){
      city = this.filterCity(this.trainings);
      this.filtered = this.filterTech(country);
    }
    if(this.activeFilters.countryFilter && !this.activeFilters.cityFilter && !this.activeFilters.techFilter){
      this.filtered = this.filterCountry(this.trainings);
    }
    if(this.activeFilters.cityFilter && !this.activeFilters.countryFilter && !this.activeFilters.techFilter){
      this.filtered = this.filterCity(this.trainings);
    }
    if(this.activeFilters.techFilter && !this.activeFilters.cityFilter && !this.activeFilters.countryFilter){
      this.filtered = this.filterTech(this.trainings);
    }
    if(Object.values(this.activeFilters).every(item => item === false)){
      this.filtered = this.trainings;
    }
  }
}
