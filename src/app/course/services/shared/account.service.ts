import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './loggin.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private logginService: LogginService
  ) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdate = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status })
    this.logginService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status
    this.logginService.logStatusChange(status);
  }
}
