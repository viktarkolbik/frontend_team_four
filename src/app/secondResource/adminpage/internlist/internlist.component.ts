import { AfterViewInit,
  Component,
  ContentChild, EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { InterviewService } from '../../../core/services/interview.service';
import { Interview } from '../../../types/interview';


@Component({
  selector: 'ia-internlist',
  templateUrl: './internlist.component.html',
  styleUrls: ['./internlist.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class InternlistComponent implements AfterViewInit, OnInit, OnChanges {
  displayedColumns: string[] = ['admin', 'adminFeedback', 'adminInterviewDate', 'id', 'techFeedback', 'techInterviewDate', 'techSpecialist'];
  @ViewChild(MatSort) sort!: MatSort;
  @ContentChild(TemplateRef) template?: TemplateRef<any>;
  @Input() Interview = [] as Interview[];
  @Output() onSelectedCandidate: EventEmitter<Interview> = new EventEmitter<Interview>();
  selectedCandidate: Interview | null = null;
  @Input() selectedCandidateID?: string;
  mockInterviewList: Interview[] = [
    {
      admin: '20981ffb-2aa8-41fe-a631-2c6f225bb1e1',
      adminFeedback: 'There is no feedback yet',
      adminInterviewDate: '2021-05-05T10:11:42.438Z',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      techFeedback: 'There is no feedback yet',
      techInterviewDate: '2021-05-05T10:11:42.438Z',
      techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    },
    {
      admin: '20981ffb-2aa8-41fe-a631-2c6f225bb1e1',
      adminFeedback: 'There is no feedback yet',
      adminInterviewDate: '2021-05-05T10:11:42.438Z',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      techFeedback: 'There is no feedback yet',
      techInterviewDate: '2021-05-05T10:11:42.438Z',
      techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    },{
      admin: '20981ffb-2aa8-41fe-a631-2c6f225bb1e1',
      adminFeedback: 'There is no feedback yet',
      adminInterviewDate: '2021-05-05T10:11:42.438Z',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      techFeedback: 'There is no feedback yet',
      techInterviewDate: '2021-05-05T10:11:42.438Z',
      techSpecialist: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    }
  ];
  dataSource!: MatTableDataSource<Interview>;

  interviewList = [] as Interview[];

  constructor(interviewService: InterviewService) {
    this.dataSource = new MatTableDataSource(this.mockInterviewList);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.mockInterviewList);
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
 

