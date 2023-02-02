import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthQuardService implements CanActivate, CanActivateChild {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
   return this.authService.isAuthenticated()
    .then(
      (authenticated: boolean) => {
        if (authenticated) {
          return true; }
          else {
            this.router.navigate(['/']);
          }
      }
    )
    
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(route, state);
  }

  constructor(private authService: AuthService, private router: Router) { }
}
