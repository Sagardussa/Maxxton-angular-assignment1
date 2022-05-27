import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { retry } from 'rxjs';
import { EmpserviceService } from 'src/app/shared/empservice.service';
import { IEmployee } from 'src/app/shared/i-employee';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  // providers: [EmpserviceService],
})
export class EmplistComponent implements OnInit {
  searchvalue: string = '';
  public Employee: any[]
  fempflag: boolean = true;
  public mystyle = {};
  text = 'blue';
  dates = '11-12-2022';
  errorMsg: string;
  errorDis: boolean = false;

  // constructor(@Optional() private emps: EmpserviceService) {}
  constructor(
    private _emps: EmpserviceService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.Employee = this.femployee;

    // this.Employee = this.emps.getEmployee();
    this._emps.getEmployee().subscribe({
      next: (res) => {
        // console.log(res)
        this.Employee = res
      },
      error: (error) => {
        this.errorDis = true
        this.errorMsg = error;
        console.log(error)
      }
    })

  }



  fname: string = 'Santosh';

  addemp() {
    // this.Employee.push({
    //   id: 8,
    //   fname: this.fname,
    //   lname: 'kamurti',
    //   gender: 'male',
    //   salary: 25000,
    //   "hiredate": "2002-03-14",
    //   hra: 1000,
    //   da: 3000,
    // });
  }


  // getTotalEmp() {
  //   return this.Employee.length;
  // }
  // getTotalfemaleEmp() {
  //   return this.Employee.filter((e) => e.gender === 'female').length;
  // }
  // getTotalmaleEmp() {
  //   return this.Employee.filter((e) => e.gender === 'male').length;
  // }

  // selectedRadioBtn: string = 'all';
  // onRadioBtnchange(selectbtn: any) {
  //   this.selectedRadioBtn = selectbtn;
  //   // console.log(this.selectedRadioBtn);
  // }

  onselect(id: number) {
    // console.log(id);
    // this._router.navigate(['/emplist', id]); // absolute path
    // this._router.navigate([id], { relativeTo: this._route }); // relative path
  }
  // deleteEmp(id: any) {
  //   // console.log(id)
  //   this._emps.deleteEmployee(id).subscribe({
  //     complete: () => {
  //       this._router.navigate(['emplist'])
  //     }
  //   })
  // }

  // editEmp(id: any) {
  //   this._router.navigate(['editemp', id])
  // }
}
