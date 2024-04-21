import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ass1Component } from './assignment-1/ass1/ass1.component';
import { AssignmentHomeComponent } from './assignment-home/assignment-home.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { MainComponent } from './assignment4/main/main.component';

const routes: Routes = [
  {
    path: 'assignment-home',
    component: AssignmentHomeComponent
  },
  {
    path: 'ass-1',
    component: Ass1Component
  },
  {
    path: '',
    redirectTo: 'assignment-home',
    pathMatch: 'full'
  },
  {
    path: 'ass-2',
    component: Assignment2Component
  },
  {
    path: 'ass-3',
    component: Assignment3Component
  },
  {
    path :'ass-4',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
