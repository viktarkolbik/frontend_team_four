import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Internship} from '../../../types';
import {InternshipsService} from '../../../core/services/internships.service';
import {switchMap} from 'rxjs/operators';
import {MatDialog} from "@angular/material/dialog";
import {LoadingService} from "../../../core/services/loading.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AcceptDialogComponent} from "./accept-dialog/accept-dialog.component";

@Component({
  selector: 'ia-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  internships = [] as Internship[];
  filteredInternships = [] as Internship[];
  error?: number;

  constructor(
    private route: ActivatedRoute,
    private internshipservice: InternshipsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private loadingService: LoadingService,
  ) {
    this.route.data.subscribe(
      (data) => {
        if (data.internships.error) {
          this.error = data.internships.status;
        } else {
          this.internships = data.internships;
          this.filteredInternships = data.internships;
        }
      }
    );
  }
  ngOnInit(): void {
  }
  updateInternships(internships: Internship[]) {
    this.filteredInternships = internships;
  }

  removeInternship(id: string) {
    const dialogRef = this.dialog.open(AcceptDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.loadingService.setLoadingState(true);
        this.internshipservice.deleteInternshipById(id).pipe(
          switchMap(() => this.internshipservice.getInternshipList()))
          .subscribe(
            (data) => {
            this.internships = data.filter(internship=> internship.id !== id);
            this.updateInternships(data);
            this.loadingService.setLoadingState(false);
            },
            error => {
              this.loadingService.setLoadingState(false);
              const message = 'Error happened please try again later';
              this.snackBar.open(message, 'Ok');
            }
          );
      }
    });
  }
}
