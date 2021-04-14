import { Component, OnInit } from '@angular/core';
import { Internlist } from '../../types/internlist';

@Component({
  selector: 'ia-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {
  selectedRecruiter = "";
  selectedTechspecialist = "";
  test = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
const ELEMENT_DATA: Internlist[] = [
  {
    email: 'admin@mail.ru',
    fullname: "Ivan Ivanovich",
    phone: 80293333333,
    skype: 'H',
    englishlevel: "b1",
    status: "registered",
    recruiter: "Grey A.",
    techspecialist: "Blue D.",
    technology: "Js"
  }
];