import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {

  constructor() { }
  @Input() evenNumber!: number


  ngOnInit(): void {
  }

}
