import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewchChildComponent } from '../viewch-child/viewch-child.component';

@Component({
  selector: 'app-viewch-main',
  templateUrl: './viewch-main.component.html',
  styleUrls: ['./viewch-main.component.scss']
})
export class ViewchMainComponent implements  AfterViewInit {

  constructor() { }

  name = 'Angular';
  @ViewChildren(ViewchChildComponent) childsData!: QueryList<any>;

  ngAfterViewInit(): void {
    this.childsData.forEach(
      data=>{
        console.log(data);
      }
    )
  }




}
