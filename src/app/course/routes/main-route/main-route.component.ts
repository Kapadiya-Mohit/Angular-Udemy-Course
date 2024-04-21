import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-route',
  templateUrl: './main-route.component.html',
  styleUrls: ['./main-route.component.scss']
})
export class MainRouteComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  gotoHome(){
    this.router.navigate(['/course/home', 1 , 'mohit'])
  }


  redirectTOAbout(){
    this.router.navigate(['/course/about'])
  } 

  redirectToQueryParamsComp(){
    this.router.navigate(['/course/query-params'], {
      queryParams: {
          name : 'tushar',
          id :2
      },
      fragment:'loading'
    })
  }

  goToChildRoute(){
    this.router.navigate(['/course/child-route'])
  }

  canDeactivateRouteExample(){
    this.router.navigate(['/course/deactivate'])
  }

  goTOresolverRoute(){
    this.router.navigate(['/course/resolver'])
  }
}
