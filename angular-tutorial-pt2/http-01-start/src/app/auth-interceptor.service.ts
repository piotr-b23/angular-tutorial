import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';


export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Req is on its way');
    console.log(req.url);
    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
    return next.handle(modifiedRequest).pipe(tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log('Response arrived');
        console.log(event.body);
      }
    }));
  }
  constructor() { }
}
