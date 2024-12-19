import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable() 

export class ConsumerService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {}

  get<T>(endpoint: string, id: number = 0) {
    return id != 0
      ? this._http.get<T>(`${this.baseUrl}${endpoint}/${id}`)
      : this._http.get<T>(`${this.baseUrl}${endpoint}`);
  }

  add<T>(endpoint: string, data: T) {
    return this._http.post<T>(`${this.baseUrl}${endpoint}`, data);
  }

  update<T>(endpoint: string, id: number, data: T) {
    return this._http.put<T>(`${this.baseUrl}${endpoint}/${id}`, data);
  }

  delete<T>(endpoint: string, id: number) {
    return this._http.delete<T>(`${this.baseUrl}${endpoint}/${id}`);
  }
}
