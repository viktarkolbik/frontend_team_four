import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = false;
  constructor() { }
  setLoadingState(value:boolean) {
    this.loading = value;
  }
  getLoadingState() {
    return this.loading;
  }
}
