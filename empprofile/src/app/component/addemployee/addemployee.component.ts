import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { usernamecheck } from 'src/app/shared/customvalidationfun';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


    this.employeeForm = this.fb.group(
      {
        firstName: [
          '', [Validators.required, Validators.minLength(2), Validators.maxLength(30),]],

        middleName: [
          '', Validators.required],

        lastName: [
          '', Validators.required]
      }

    );
  }

  get getfirstName() {
    return this.employeeForm.get('firstName');
  }
  get getmiddleName() {
    return this.employeeForm.get('middleName');

  }
  get getlastName() {
    return this.employeeForm.get('lastName');

  }


  AddResume() {
    console.log(this.employeeForm.value);
  }

}
