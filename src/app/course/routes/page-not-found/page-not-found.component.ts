import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  errorMessage! : string

  ngOnInit(): void {
    this.route.data.subscribe(
      (res)=>{
        this.errorMessage = res['message']
      }
    )
  }

}
