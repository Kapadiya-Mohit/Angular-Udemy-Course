import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

export interface canComponentDeactivate {
  canDeactivate : () => CanDeactivateType
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<canComponentDeactivate> {
  canDeactivate(component: canComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return component.canDeactivate ? component.canDeactivate() : true; 
  }

  
}
