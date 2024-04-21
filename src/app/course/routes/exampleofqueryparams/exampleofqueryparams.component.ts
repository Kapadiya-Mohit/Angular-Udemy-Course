import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exampleofqueryparams',
  templateUrl: './exampleofqueryparams.component.html',
  styleUrls: ['./exampleofqueryparams.component.scss']
})
export class ExampleofqueryparamsComponent implements OnInit {

  constructor(
    private route : ActivatedRoute
  ) { }

  userId! : number;
  userName! : string;

  uId! : number;
  uName! : string


  ngOnInit(): void {
    this.route.queryParams.subscribe(
      query=>{
        this.userId = query['id'];
        this.userName = query['name']
      }
    )

    // other ways

   this.uId = this.route.snapshot.queryParams['id']
   this.uName =  this.route.snapshot.queryParams['name']
  }

}
