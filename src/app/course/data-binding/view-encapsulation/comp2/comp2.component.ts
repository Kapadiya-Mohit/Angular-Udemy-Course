import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



/*

ViewEncapsulation.ShadowDom => create it's own DOM
*/