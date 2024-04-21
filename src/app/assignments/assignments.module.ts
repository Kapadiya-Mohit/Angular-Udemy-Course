import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentHomeComponent } from './assignment-home/assignment-home.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { FormsModule } from '@angular/forms';
import { Assignment3Component } from './assignment3/assignment3.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { MainComponent } from './assignment4/main/main.component';


@NgModule({
  declarations: [
    AssignmentHomeComponent,
    Assignment2Component,
    Assignment3Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    FormsModule
  ]
})
export class AssignmentsModule { }
