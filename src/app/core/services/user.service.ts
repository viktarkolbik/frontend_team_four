import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../types/user';
import { environment } from '../../../environments/environment';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath = `${environment.backendURL}/api/users`;
  constructor(private http: HttpClient) {}
  getUserId(id: string): Observable<User> {
    return this.http.get<User>(this.basePath + '/' + id);
  }
  getUsersRole(idInternship: string, role: string): Observable<User[]> {
    return this.http.get<User[]>(
      this.basePath + '?internshipId=' + idInternship + '&role=' + role
    );
  }
  getUsersSkills(skills: string[]): Observable<User[]> {
    return this.http
      .get<User[]>(this.basePath + '/skills?skills=' + skills.join(','))
      .pipe(
        map(users => users.filter(user => user.userRole === 'TECH_EXPERT'))
      );
  }
  getAllUsersRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(this.basePath + '/roles?role=' + role);
  }
  sendTimeSlots(id: string, formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.basePath}/${id}/time-slot`, formData, {
      headers
    });
  }
}
