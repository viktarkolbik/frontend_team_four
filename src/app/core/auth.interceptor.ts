import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {StorageService} from './storage.service';

export interface Tokens {
  email: string;
  id: string;
  login: string;
  role: Array<string>;
  token: number;
  type: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

constructor(private store: StorageService) {
}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('InterceptRequest', req.body);
    const cloned = req.clone({
      // headers: req.headers.append('Auth', this.store.getAuthToken())
    });
    return next.handle(cloned).pipe(
      tap(event => {


      })
    );
  }
}
