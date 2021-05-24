import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private storage: StorageService,
    private auth: AuthService,
    private route: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuth()) {
      // console.log('InterceptRequest', req);
      const cloned = req.clone({
        headers: req.headers.append(
          'Authorization',
          `Bearer ${this.storage.getAuthToken()}`
        )
      });
      return next.handle(cloned);
      //   .pipe( //show and inspect response at server
      //   tap(event => {
      //     if (event.type === HttpEventType.Response) {
      //       console.log('InterceptResp', req.body);
      //     }
      //   })
      // );
    } else {return next.handle(req);}
  }
}
