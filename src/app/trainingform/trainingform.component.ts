import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ia-trainingform',
  templateUrl: './trainingform.component.html',
  styleUrls: ['./trainingform.component.scss']
})

export class TrainingformComponent implements OnInit {
  form: FormGroup;
  formSelectorTime: FormGroup;

  countries: {[key: string]: string} = {
    by: 'Беларусь',
    ua: 'Украина'
  };
  cities: {[key: string]: string[]} = {
    ua: [
      'Винница',
      'Киев',
      'Харьков',
      'Львов',
      'Одесса',
      'Мариуполь'
    ],
    by: [
      'Минск',
      'Гродно',
      'Гомель',
      'Витебск'
    ],
  };

  formats: string[] = [
    'ONLINE',
    'OFFLINE'
  ];
  languagies: string[] = [
    'JavaScript',
    'C++',
    'C#'
  ];

  constructor() {
    this.formSelectorTime = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    });
    this.form = new FormGroup({
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      trainingformName: new FormControl('', Validators.required),
      trainingDescription: new FormControl(''),
      trainingFormat: new FormControl('', Validators.required),
      trainingLanguage: new FormControl('', Validators.required),
      trainingRequirements: new FormControl(''),
      trainingStart: new FormControl('', Validators.required),
      trainingEnd: new FormControl('', Validators.required),
      trainingRegistryStart: new FormControl('', Validators.required),
      trainingRegistryEnd: new FormControl('', Validators.required),
      trainingSkills: new FormControl('')
    });
  }

  today(): string {

    const fullDay = new Date();

    const day = fullDay.getDate();

    const month = fullDay.getMonth() + 1;

    const year = fullDay.getFullYear();

    if ( month < 10 ) {
      return (`${day}.0${month}.${year}`);
    }

    if ( day < 10 ) {
      return (`0${day}.${month}.${year}`);
    }

    if ( day < 10 && month < 10 ) {
      return (`0${day}.0${month}.${year}`);
    }

    return (`${day}.${month}.${year}`);
  }

  getKeys(obj: any): string[]{
    return Object.keys(obj);
  }
  ngOnInit(): void {
  }
}
