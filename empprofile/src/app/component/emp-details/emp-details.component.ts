import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmpserviceService } from 'src/app/shared/empservice.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  empid: any
  empViewidArr: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _emp: EmpserviceService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.empid = params.get('id');
    })
    if (this.empid) {
      this._emp.getEmployeeById(this.empid).subscribe({
        next: (res: any) => {
          // console.log(res)
          this.empViewidArr = res;
          // console.log(this.empViewidArr)
        }
      })
    }


  }
  gotoback() {
    let sid = this.empid ? this.empid : null
    this._router.navigate(['employeelist'])
  }

}
