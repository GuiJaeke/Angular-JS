import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { User } from '../user';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListService{
  private apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  remove(id: number) {
    console.log('ativando service');
    return this.http.get<User>(`${this.apiUrl}delete/${id}`)
    
  }
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.apiUrl}animals`);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}home`);
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}user/${id}`);
  }
  insertUser(form:{}) {
    const data = form
    
    return this.http.post(`${this.apiUrl}users/create`, data)
  }
}
