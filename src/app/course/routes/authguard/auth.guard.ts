import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate , CanActivateChild {

  constructor(private authService : AuthService , private router : Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const isAuthenticated = this.authService.isAuthenticated();
      if(isAuthenticated){
        return true;
      }
      else{
        this.router.navigate(['/'])
        return false;
      }
    
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuthenticated = this.authService.isAuthenticated();
    if(isAuthenticated){
      return true;
    }
    else{
      this.router.navigate(['/'])
      return false;
    }
  
  }
  
}
