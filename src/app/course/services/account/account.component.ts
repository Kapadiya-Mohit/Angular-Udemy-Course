import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  @Input() account!: { name: string, status: string };
  @Input() id!: number;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdate.emit(status);
  }
}

