import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/';

  isBrowser!: boolean;

  constructor(private http: HttpClient) {
    this.isBrowser = typeof window !== 'undefined';
  }

  login(username: string, password: string): Observable<any> {
    console.log(password);
    
    return this.http.get<any[]>(`${this.apiUrl}${username}/${password}`);
  }

  saveToken(id: string) {
    if (this.isBrowser) {
      localStorage.setItem('authToken', id);
    }
  }

  getToken(): string | null {
    if (this.isBrowser) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    if (this.isBrowser) {
      return localStorage.removeItem('authToken');
    }
  }
}
