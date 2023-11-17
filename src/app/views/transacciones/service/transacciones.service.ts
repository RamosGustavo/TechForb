import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get(`${this.apiUrl}/api/transactions`);
  }
}
