import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Internship, Training} from "../../../types";

@Component({
  selector: 'ia-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  internships: Internship[] | any;
  error: number | undefined;
  errorMessage: string | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => this.internships = data.internships);
    if (this.internships.error) {
      this.error = this.internships.status;
      this.errorMessage = "Что то пошло не так попробуйте обновить страницу";
    }
  }

  ngOnInit(): void {
  }

}
