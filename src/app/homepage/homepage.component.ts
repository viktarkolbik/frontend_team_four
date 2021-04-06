import { Component, OnInit } from '@angular/core';

export interface Training {
  id?: string;
  country: string;
  city: string;
  form: string;
  technology: string;
  img: string;
  data: any;
}

@Component({
  selector: 'ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trainings: Training[] = [
    {
      country: 'Belarus',
      city: 'Minsk',
      form: 'Online',
      technology: 'HTML',
      img: 'assets/icons/html.svg',
      data: '25 april 2021',
    },
    {
      country: 'Ukraine',
      city: 'Kiev',
      form: 'Online',
      technology: 'CSS',
      img: 'assets/icons/css.svg',
      data: '15 april 2021',
    },
    {
      country: 'Russia',
      city: 'Moscow',
      form: 'Online',
      technology: 'JavaScript',
      img: 'assets/icons/JS.svg',
      data: '3 april 2021',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
