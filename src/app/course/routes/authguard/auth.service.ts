import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn : boolean = false;

  isAuthenticated(){
    
    return this.loggedIn;
  }


}
