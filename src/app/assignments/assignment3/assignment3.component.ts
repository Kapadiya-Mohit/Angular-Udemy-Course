import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {

  constructor() { }
  number: any = 0;
  numbers: any = [];
  showsecret = false;


  ngOnInit(): void {
  }

  ondisplayData() {
    this.showsecret = !this.showsecret
    this.number = this.number + 1;
    this.numbers.push(this.number);
  }
}
