import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUser} from "../IUser";

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user:IUser): Observable<any> {
    return this.http.post(AUTH_API + 'user',user )
  }
}
