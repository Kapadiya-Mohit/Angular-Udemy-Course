import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }

  logStatusChange(status: string) {
    console.log('server status is' + status)
  }

}
