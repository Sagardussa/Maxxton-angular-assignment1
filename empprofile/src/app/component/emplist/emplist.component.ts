import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from 'src/app/shared/empservice.service';
import { IEmployee } from 'src/app/shared/i-employee';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  // providers: [EmpserviceService],
})
export class EmplistComponent implements OnInit {
  public Employee: any[]
  errorMsg: string;
  errorDis: boolean = false;

  constructor(
    private _emps: EmpserviceService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._emps.getEmployee().subscribe({
      next: (res) => {
        // console.log(res)
        this.Employee = res
      },
      error: (errors) => {
        this.errorDis = !this.errorDis;
        this.errorMsg = errors;
      }
    })

  }

  createEmp() {
    this._router.navigate(['/addemployee'])
  }


  OnselectviewEmp(id: number) {
    // console.log(id)
    this._router.navigate([id], { relativeTo: this._route })
  }









}
