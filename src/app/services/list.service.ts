import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { User } from '../user';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://192.168.3.53:3000/'

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal) {
    console.log('ativando service');
    return animals.filter((a) => animal.name !== a.name)
    
  }
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.apiUrl}animals`);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}home`);
  }
}
