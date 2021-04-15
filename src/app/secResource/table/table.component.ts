import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Internlist } from '../../types/internlist';


@Component({
  selector: 'ia-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent {
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    columnsToDisplay = ['email', "fullname", "phone", "skype", "englishlevel", "status", "recruiter", "techspecialist", "technology"];
    expandedElement!: Internlist | null;
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    @ViewChild(MatSort) sort!: MatSort;
    @Input() candidatesList : Internlist[] | undefined;
    @Output() selectedCandidates : Internlist[] | undefined;
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    // window.data = this.dataSource
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