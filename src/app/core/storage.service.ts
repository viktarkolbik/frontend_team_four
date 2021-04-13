import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage = window.localStorage;

  getLang(): string | null {
    return this.storage.getItem('lang');
  }

  setLang(value: string): void {
    this.storage.setItem('lang', value);
  }

  getAuthToken(): string | null {
    return this.storage.getItem('AuthToken');
  }

  setAuthToken(value: string): void {
    this.storage.setItem('AuthToken', value);
  }
  constructor() { }
}
