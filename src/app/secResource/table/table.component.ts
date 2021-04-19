import {
  Component,
  ContentChild, EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Candidate} from '../../types/candidate';

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
export class TableComponent implements OnInit, OnChanges {
  @ViewChild(MatSort) sort!: MatSort;
  @ContentChild(TemplateRef) template?: TemplateRef<any>;
  @Input() candidates: Candidate[] | undefined;
  @Output() onSelectedCandidate: EventEmitter<Candidate> = new EventEmitter<Candidate>();
  selectedCandidate?: Candidate | null;
  dataSource!: MatTableDataSource<any>;
  displayedColumns = [
    'lastName',
    'email',
    'phoneNumber',
    'skype',
    'englishLevel',
    'formStatus',
    'admin',
    'techSpecialist',
    'primarySkill'
  ];
  test: any;
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.candidates);
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {

  }
}
