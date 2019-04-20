import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = 'http://localhost:5000/auth/login';
  private readonly registerUrl = 'http://localhost:5000/auth/register';

  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body){
    return this.http.post(this.loginUrl, body)
      .pipe(catchError(error =>{
        return throwError(error.message)
      }))
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin(){
    return localStorage.getItem('isAdmin') !=='false';
  }

  getToken(){
    let token = localStorage.getItem('token');
    return token;
  }

  getUserId(){
    let id = localStorage.getItem('userId');
    return id;
  }
}
