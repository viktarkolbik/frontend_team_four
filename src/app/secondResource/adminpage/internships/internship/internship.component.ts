import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Internship } from '../../../../types';
import { InternshipsService } from '../../../../core/services/internships.service';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../types/user';

@Component({
  selector: 'ia-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  @Input() internship!: Internship;
  @Output() deletingInternship: EventEmitter<string> =
    new EventEmitter<string>();
  skills: string[] = [];
  userInfo = {} as User;
  constructor(
    private internshipService: InternshipsService,
    private auth: AuthService
  ) {
    this.auth.getUserInfo().subscribe(data => {
      this.userInfo = data;
    });
  }

  ngOnInit(): void {
    this.skills = this.internship.skills.map(skill =>
      this.internshipService.getChangedSkills(skill)
    );
  }

  remove(id: string): void {
    this.deletingInternship.emit(id);
  }
}
