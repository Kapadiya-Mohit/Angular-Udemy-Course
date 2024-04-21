import { AfterViewInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit , AfterViewInit {

  @ContentChild('child') content! : ElementRef

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.content);
  }

  ngOnInit(): void {
  }



}
