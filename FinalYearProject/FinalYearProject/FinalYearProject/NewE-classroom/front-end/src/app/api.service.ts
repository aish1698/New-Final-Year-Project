import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  forgotpassword(securitycode: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  login( u: any, p: any)
  {
    return this.http.post(`http://localhost:3000/User/login`, {userid: u, password: p})
  }
  learning( s: any, su: any)
  {
    return this.http.post(`http://localhost:3000/learning/learningstudent`, {sem: s, subject: su})
  }
  
}