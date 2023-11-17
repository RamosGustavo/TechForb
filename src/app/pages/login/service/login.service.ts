import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  loginUser(user: any) {
    return this.http.get(`${environment.apiUrl}/users`, user)
  }

    isLoggedIn(): boolean {
      return this.loggedIn;
    }
  
    setLoggedIn(value: boolean) {
      this.loggedIn = value;
    }
  
    setLogout() {
      this.loggedIn = false;
    }
}
