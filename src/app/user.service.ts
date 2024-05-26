import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3080'; // Replace with your actual server URL

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user); // Use POST for registration
  }

  login(cred:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, cred);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);  // Use GET for user by email
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-users`);
  }
}
