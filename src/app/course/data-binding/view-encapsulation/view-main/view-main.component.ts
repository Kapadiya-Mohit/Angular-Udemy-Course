import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ViewMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
