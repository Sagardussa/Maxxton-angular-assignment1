import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { checkNamestring, emailcheck } from 'src/app/shared/customvalidationfun';


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
        firstName: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30), checkNamestring]],
        middleName: ['', [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), checkNamestring]],
        lastName: ['', [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), checkNamestring]],
        moblie: ['', [Validators.required]],
        email: ['', [Validators.required, emailcheck]],
        address: ["", Validators.required],
        street: ["", Validators.required],
        pincode: ["", Validators.required],
        city: ["", [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), checkNamestring]],
        state: ["", [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), checkNamestring]],
        country: ["", [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), checkNamestring]]
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
  get getmoblie() {
    return this.employeeForm.get('moblie');
  }
  get getemail() {
    return this.employeeForm.get('email');
  }
  get getaddress() {
    return this.employeeForm.get('address');
  }
  get getstreet() {
    return this.employeeForm.get('street');
  }
  get getpincode() {
    return this.employeeForm.get('pincode');
  }
  get getcity() {
    return this.employeeForm.get('city');
  }
  get getstate() {
    return this.employeeForm.get('state');
  }
  get getcountry() {
    return this.employeeForm.get('country');
  }


  AddResume() {
    console.log(this.employeeForm.value);
  }

}
