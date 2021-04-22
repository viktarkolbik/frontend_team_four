import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../core/auth.service';
import {User} from '../../types/user';

@Component({
  selector: 'ia-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  userInfo = {} as User;
  constructor(private route: ActivatedRoute, public auth: AuthService,  private router: Router,) {
    this.auth.getUserInfo().subscribe(data => {
      this.userInfo = data;
    });
  }
  ngOnInit(): void {
    if(this.router.url === '/adminpage'){
      if(this.userInfo.userRole === 'ADMIN' || this.userInfo.userRole === 'SUPER_ADMIN'){
        this.router.navigate(['/adminpage/internships']);
      }
      else if(this.userInfo.userRole === 'TECH_EXPERT'){
        this.router.navigate(['/adminpage/techexpert']);
      }
    }
  }

}
