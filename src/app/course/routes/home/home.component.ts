import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }


  user: any = {
    id: '',
    name: ''
  }

  paramsSubscription!: Subscription

  ngOnInit(): void {
    /*
      when use there is no other way reaching it.
    */

    //  this.user ={
    //   id : this.route.snapshot.params['id'],
    //   name :  this.route.snapshot.params['name']
    //  }  

    // another way

    this.paramsSubscription = this.route.params.subscribe(
      params => {
        this.user.id = params['id'],
          this.user.name = params['name']
        console.log(params);
      }
    )
  }

  gotoHome() {
    this.router.navigate(['/course/home', 1, 'mohit'])
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
