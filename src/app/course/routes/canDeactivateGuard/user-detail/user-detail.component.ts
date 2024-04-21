import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  userDetailsForm! : FormGroup
  isSaved = false;

  ngOnInit(): void {
    this.initializationForm();
  }

  initializationForm(){
    this.userDetailsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  
  canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result);
    }

    return of(true);
  }

  onSubmit(){
    this.isSaved = true;
  }

}
