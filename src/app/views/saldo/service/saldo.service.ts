import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get(`${this.apiUrl}/api/cards`);
  }
}
