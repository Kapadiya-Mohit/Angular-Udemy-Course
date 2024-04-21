import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { LogginService } from '../shared/loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {

  constructor(
    private loggerService: LogginService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdate.subscribe(
      res => {
        alert("status: " + res)
      }
    )
  }

  ngOnInit(): void {
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    if (accountName != '') {
      this.accountService.addAccount(accountName, accountStatus);
      this.loggerService.logStatusChange(accountStatus);
    }
  }
}
