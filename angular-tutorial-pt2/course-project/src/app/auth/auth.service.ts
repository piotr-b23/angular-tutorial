import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KeyModel } from './key.model';

export interface AuthResponseData {
idToken:	string;
email:	string;
refreshToken:	string;
expiresIn:	string;
localId:	string;
registered?:	boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signup(email: string, password: string){
    const key = new KeyModel();
    return this.http.post<AuthResponseData>(key.signupKey, {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError));
  }

  login(email: string, password: string){
    const key = new KeyModel();
    return this.http.post<AuthResponseData>(key.singInKey,{
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError));
    
  }


  private handleError(errorRes: HttpErrorResponse){

    let errorMessage = 'An uknown error occurred';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(()=> new Error(errorMessage));
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Password is not valid';
        break;     

    }
    return throwError(()=> new Error(errorMessage));
  }


  constructor(private http: HttpClient) { }
}
