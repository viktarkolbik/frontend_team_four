import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  basePath = `${environment.backendURL}/api/location`;
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(this.basePath + '/countries');
  }

  getCities(id: string): Observable<any> {
    return this.http.get(`${this.basePath}/cities?countryId=${id}`);
  }
}
