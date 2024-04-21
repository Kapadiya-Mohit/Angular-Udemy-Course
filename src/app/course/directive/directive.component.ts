import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  constructor() {
    this.serverStatus = this.randomValue > 0.5 ? 'online' : 'offline'
  }

  randomValue: any = Math.random().toFixed(2);
  createServer = false;
  serverStatus: string = 'offline'
  serverNames = ['server1', 'server2', 'server3', 'server4', 'server5']
  number = 5

  ngOnInit(): void {
  }

  oncreateServer() {
    this.createServer = true;
  }

}
