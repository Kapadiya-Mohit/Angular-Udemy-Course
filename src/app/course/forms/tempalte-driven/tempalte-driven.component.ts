import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempalte-driven',
  templateUrl: './tempalte-driven.component.html',
  styleUrls: ['./tempalte-driven.component.scss']
})
export class TempalteDrivenComponent implements OnInit {

  constructor() { }

  @ViewChild('form') signupForm! : NgForm;
  defaultQuestionValue = 'pet';

  genders  =['Male', 'Female']

  ngOnInit(): void {
  }

  /* onSubmit(form: NgForm){
    console.log(form.value);
  }
 */

  //  using view child

  onSubmit(){
    console.log(this.signupForm);
  }


  // set and patch value

  /* set value */
  setValueExample(){
      this.signupForm.setValue({
        userData:{
          username: 'Mohit Kapadiya',
          email :'mkpatel1234@gmai.com'
        },
        secret: 'pet',
        gender: 'Male'
      })
  }

 /*  patch value */
  patchValueExample(){
      this.signupForm.form.patchValue({
        userData: {
          username: 'M K Patel',
        }
      })
  }

  resetForm(){
    this.signupForm.reset();
  }


}
