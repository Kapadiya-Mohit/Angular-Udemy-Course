import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private route : ActivatedRoute
  ) { }

  userData : any

  ngOnInit(): void {
    this.userData = this.route.snapshot.data['data']
  }

}

