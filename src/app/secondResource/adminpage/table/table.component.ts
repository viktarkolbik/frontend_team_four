import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Candidate } from '../../../types/candidate';
import { User } from '../../../types/user';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../internlist/feedback/feedback.component';
import { switchMap } from 'rxjs/operators';
import { FormsService } from '../../../core/services/forms.service';
import { Internship } from '../../../types';
import {DomSanitizer} from "@angular/platform-browser";
import { saveAs } from 'file-saver';

@Component({
  selector: 'ia-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ContentChild(TemplateRef) template?: TemplateRef<any>;
  @Input() candidates = [] as Candidate[];
  @Input() user!: User;
  @Input() internship!: Internship;
  @Output() onSelectedCandidate: EventEmitter<Candidate> =
    new EventEmitter<Candidate>();
  selectedCandidate: Candidate | null = null;
  @Input() selectedCandidateID?: string;
  fileUrl: any;
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
  approvedCandidates = [] as Candidate[];
  constructor(
    private dialog: MatDialog,
    private formsService: FormsService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.candidates);
    this.dataSource.sort = this.sort;
    this.approvedCandidates = this.candidates.filter(
      el => el.formStatus === 'ACCEPTED'
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    if (this.user) {
      this.displayedColumns.push('feedback');
    }
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  getFile(id: string) {
    this.formsService.getFile(id)
      .subscribe(
        data => {
          if(data.body){
            const blob = new Blob([data.body], { type: 'application/octet-stream' });
            saveAs(blob, 'CV.pdf')
          }
        },
        error => {
          console.log(error);
        }
      );
  }
  getParseDate(str: string): Date {
    const date = new Date(str + 'Z');
    return date;
  }
  getLocaleDate(str: string) {
    const date = this.getParseDate(str);
    const utc = date.getTime();
    return new Date(utc);
  }
  openFeedBackDialog(userID: string, formID: string) {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      data: { userID, formID }
    });
    dialogRef
      .afterClosed()
      .pipe(
        switchMap(() =>
          this.formsService.getCandidatesListByUserId(this.user.id)
        )
      )
      .subscribe(
        data => {
          this.candidates = data;
          this.dataSource = new MatTableDataSource(this.candidates);
        },
        error => {
          console.log(error);
        }
      );
  }
}
