import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './course/routes/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path :'home',
    component:HomeComponent
  },
  {
    path :'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path :'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  
  },
  {
    path :'assiggnment',
    loadChildren: () => import('./assignments/assignments.module').then(m => m.AssignmentsModule) 
  },
  
  // wild-card route
  {
    path: '**', component: PageNotFoundComponent , data :{message :'SORRY! PAGE NOT FOUND'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
