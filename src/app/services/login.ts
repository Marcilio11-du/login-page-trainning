import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../types/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((value) => {
        this.saveSession(value.token, value.name);
      })
    );
  }

  signUp(name: string, email: string, password: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/register`, { name, email, password }).pipe(
      tap((value) => {
        this.saveSession(value.token, value.name);
      })
    );
  }

  // Criamos um método privado para não repetir código (DRY - Don't Repeat Yourself)
  private saveSession(token: string, name: string) {
    sessionStorage.setItem("auth-token", token);
    sessionStorage.setItem("username", name);
  }
}