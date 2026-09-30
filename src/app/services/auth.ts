import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Auth {
  isLoggedIn: boolean = false;
  public redirectUrl: string = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('https://localhost:7195/api/login/login',
      { username, password }, { responseType: 'text' });
  }
}