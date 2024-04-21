import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  // add relative path
  onReload(){
    // matches or add current route
    this.router.navigate(['/course'] , {relativeTo: this.route})
  }

}
