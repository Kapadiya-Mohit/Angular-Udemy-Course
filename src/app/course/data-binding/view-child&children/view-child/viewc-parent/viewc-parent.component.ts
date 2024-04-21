import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewcChildComponent } from '../viewc-child/viewc-child.component';

@Component({
  selector: 'app-viewc-parent',
  templateUrl: './viewc-parent.component.html',
  styleUrls: ['./viewc-parent.component.scss']
})
export class ViewcParentComponent implements OnInit {

  constructor() { }

  @ViewChild(ViewcChildComponent, { static: false }) vchild!: ViewcChildComponent

  ngOnInit(): void {
  }

  showCounter: boolean = true;

  IncNumber() {
    this.vchild.incrementNumber();
  }

  decNumber() {
    this.vchild.decrementNumber();
  }

}
