import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName: string = '';
  serverProperty: string = 'HTTP'

  onCreateServer() {
    this.serverCreationStatus = "Server was created!"
  }

  oncreateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
