import {
  AfterViewInit,
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
import {Candidate} from '../../../types/candidate';

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
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ContentChild(TemplateRef) template?: TemplateRef<any>;
  @Input() candidates = [] as Candidate[];
  @Output() onSelectedCandidate: EventEmitter<Candidate> = new EventEmitter<Candidate>();
  selectedCandidate: Candidate | null = null;
  @Input() selectedCandidateID?: string;
  dataSource!: MatTableDataSource<Candidate>;
  displayedColumns = [
    'lastName',
    'phoneNumber',
    'skype',
    'englishLevel',
    'formStatus',
    'admin',
    'techSpecialist',
    'primarySkill'
  ];
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.candidates);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

