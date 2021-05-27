import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading$ = new BehaviorSubject(false);

  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  constructor() {}

  setLoadingState(value: boolean) {
    this._isLoading$.next(value);
  }
}
