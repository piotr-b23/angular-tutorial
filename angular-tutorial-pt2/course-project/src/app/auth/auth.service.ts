import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyModel } from './key.model';

interface AuthResponseData {
idToken:	string;
email:	string;
refreshToken:	string;
expiresIn:	string;
localId:	string;
registered:	boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signup(email: string, password: string){
    let key = new KeyModel();
    return this.http.post<AuthResponseData>(key.signupKey, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  constructor(private http: HttpClient) { }
}
