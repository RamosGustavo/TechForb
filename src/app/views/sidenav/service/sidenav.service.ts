import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get(`${this.apiUrl}/api/menu`);
  }
}
