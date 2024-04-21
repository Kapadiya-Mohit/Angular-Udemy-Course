import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  genders = ['male', 'female'];
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  get hobbies() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  get hobbiesControl() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.hobbies.push(control);
  }

  hobbiesControls(index: number) {
    return (<FormArray>this.signupForm.get('hobbies')).at(index);
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
