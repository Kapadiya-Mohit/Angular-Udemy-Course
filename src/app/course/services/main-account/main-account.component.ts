import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-main-account',
  templateUrl: './main-account.component.html',
  styleUrls: ['./main-account.component.scss']
})
export class MainAccountComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }

  accounts: { name: string, status: string }[] = [];

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }



}

