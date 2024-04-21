import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-server',
  templateUrl: './parent-server.component.html',
  styleUrls: ['./parent-server.component.scss']
})
export class ParentServerComponent implements OnInit {

  constructor() { }

  newType : string = '';
  newDisc : string = '';

  ngOnInit(): void {
  }

  serverElementsData =[
    {type:'Mac' , dis:'Intel core i7 processors with 3.2 GHz'},
    {type:'T4g' , dis:'6 physical / 12 logical cores'},
    {type:'T3' , dis:'32 GiB of memory'},
    {type:'T3a' , dis:'Mac instances are dedicated, bare-metal instances which are accessible in the EC2 console as dedicated hosts'},
  
  ]

  addNewServer(newServer : any){
    if(newServer?.type != '' && newServer?.dis !=  ''){
      this.serverElementsData.push({
        type:newServer.type,
        dis:  newServer.dis
      })
    }
  }
}
