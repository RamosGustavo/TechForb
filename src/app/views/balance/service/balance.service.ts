// balance.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroments';

interface ChartDataResponse {
  id: number;
  label: string;
  data: number[];
}

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getChartData(): Observable<ChartDataResponse[]> {
    return this.http.get<ChartDataResponse[]>(`${this.apiUrl}/api/chart-data`);
  }
}
