import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) {}

  login(name: string, password: string) {
    return this.httpClient.post<LoginResponse>("https://example.com/api/login", {name, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth_token", value.token);
        sessionStorage.setItem("username", value.name);
      })
    );
  }

}