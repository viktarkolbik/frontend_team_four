import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  static localStorage: Storage = window.localStorage;
  static getLang(): string | null {
    return this.localStorage.getItem('lang');
  }
  static setLang(value: any): void {
    this.localStorage.setItem('lang', value);
  }
  constructor() { }
}
