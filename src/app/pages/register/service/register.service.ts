import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private loggedIn = false;
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${environment.apiUrl}/users/register`, user , { responseType: 'text' })
  }
}
