import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  ngOnInit(): void {
  }


  onSetIntervalFired(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number)
    }
    else {
      this.oddNumbers.push(number)
    }
  }

}
