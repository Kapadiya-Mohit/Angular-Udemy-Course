import { Component, Input, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewch-child',
  templateUrl: './viewch-child.component.html',
  styleUrls: ['./viewch-child.component.scss']
})
export class ViewchChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() name!: string;

}
