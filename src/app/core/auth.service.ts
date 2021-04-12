import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Tokens {
  userId: number;
  email: string;
  title: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private postsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getData(): Observable<Tokens> {

    return this.http.get<Tokens>(this.postsURL);
  }

}
