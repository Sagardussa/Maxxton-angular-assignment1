import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { checkNamestring, checknumber, emailcheck, mobliecheck } from 'src/app/shared/customvalidationfun';
import { Employeeclass } from 'src/app/shared/employeeclass';
import { EmpserviceService } from 'src/app/shared/empservice.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employeeForm: FormGroup;
  emparr: any = [];
  apiimages = `https://randomuser.me/api/portraits/men/${this.emparr.id}.jpg`

  constructor(private fb: FormBuilder,
    private _emp: EmpserviceService,
    private _router: Router,
    private _route: ActivatedRoute) { }

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
        moblie: ['', [Validators.required, mobliecheck]],
        DOB: ['', Validators.required],
        images: ["",],
        email: ['', [Validators.required, emailcheck]],
        address: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),]],
        street: ["",],
        pincode: [""],
        city: ["", [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), checkNamestring]],
        state: ["", [Validators.required, Validators.minLength(2),
        Validators.maxLength(30), checkNamestring]],
        country: ["", [Validators.required, Validators.minLength(2),
        Validators.maxLength(10), checkNamestring]]
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
  get getDOB() {
    return this.employeeForm.get('DOB');
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

  empformdata = new Employeeclass("", "", "", 0, "", "", "", 0, "", "", "");

  AddEmp() {
    // console.log(this.employeeForm.value);
    if (this.employeeForm.value === "") {
      alert("fill all data");
    }

    this._emp.postEmployee(this.employeeForm.value).subscribe({
      next: (res) => {
        console.log("data is submit", res)
        // this._router.navigate(['emplist']);
        window.location.reload();
        this.emparr = res;
        // console.log(this.emparr);
      }
    })
  }


  // url = "../assets/images/default.png"
  onFileSelect(event: any) {
    // console.log(event.target);
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    let minlen = event.target.files[0].type;
    if (minlen.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event: any) => {
      console.log(reader.result);
      this.employeeForm.value.images = reader.result;
      // console.log(this.employeeForm.value.images);
    }





    // let file = event.target.files[0];
    // console.log(file);
    // if (e.target.files) {
    // var reader = new FileReader();
    // reader.readAsDataURL(e.target.files[0]);
    // reader.onload = (event: any) => {
    // this.url = event.target.result;
    // console.log(this.url)
    // this.employeeForm.value.images = reader.result
    // }
    // }
  }


}
