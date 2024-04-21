import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-server',
  templateUrl: './child-server.component.html',
  styleUrls: ['./child-server.component.scss']
})
export class ChildServerComponent implements OnInit {

  constructor() { }

  @Input('serverElements') serverElements: any
  @Output() newServer = new EventEmitter();
  serverName : string =''
  serverType : string =''

  ngOnInit(): void {
    
  }


  addServer(value:any){
    this.newServer.emit(value);
    this.serverName='';
    this.serverType=''
  } 
}
