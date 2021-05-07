import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Internship} from '../../types';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InternshipsService {
  basePath = `${environment.backendURL}/api/internships`;
  imgUrles: string[] = [];
  constructor(private http: HttpClient) {
  }
  images: { [key: string]: string } = {
    JS: "../../../../assets/icons/js.png",
    JAVA: "../../../../assets/icons/java.png",
    GO: "../../../../assets/icons/go.png",
    QA: "../../../../assets/icons/qa.jpg",
    DEV_OPS: "../../../../assets/icons/devops.png",
    C_PLUS_PLUS: "../../../../assets/icons/c.png",
    C_SHARP: "../../../../assets/icons/csh.png"
  }

  getInternshipList(): Observable<Internship[]>{
    return this.http.get<Internship[]>(this.basePath);
  }

  getInternshipById(id: string): Observable<any>{
    return this.http.get<Internship>(`${this.basePath}/${id}`);
  }
  getImagesUrl(technology:any) {
    return this.images[technology]
  }
 

}
