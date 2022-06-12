import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { checknumber } from 'src/app/shared/customvalidationfun';
import { EmpserviceService } from 'src/app/shared/empservice.service';
import { TaskserviceService } from 'src/app/shared/taskservice.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  empTask: FormGroup;
  emptaskarr: any[] = [];
  displaydate: boolean = false;
  empids: any = ""
  emp: any = ""


  constructor(private empT: FormBuilder,
    private _task: TaskserviceService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _emp: EmpserviceService) { }

  ngOnInit(): void {
    this.empTask = this.empT.group(
      {
        employee: [""],
        department: ["", Validators.required],
        startDate: ["", Validators.required],
        enddate: ["",],
        noOfDay: ["", [Validators.required, checknumber]],
        description: ["",]
      })


    // this.displaydate = true;
    // var result = new Date(this.empTask.value.startDate)
    // var noofdays = this.empTask.value.noOfDay;
    // result.setDate(result.getDate() + Number(noofdays))
    //  this.endData = "you to submit Work Till" + result.toLocaleDateString();
    // let resultendDate = result.toLocaleDateString();
    // this.endDate = `you Have to submit work till ${resultendDate}`
    //  alert(this.endDate);

    this._route.paramMap.subscribe((params: ParamMap) => {
      this.empids = params.get('id');
    })
    if (this.empids) {
      this._emp.getEmployeeById(this.empids).subscribe({
        next: (res: any) => {
          // console.log(res)
          this.emp = res;
          // console.log(this.emp)
        }
      })
    }
  }


  get getemployee() {
    return this.empTask.get('employee');
  }

  get getdepartment() {
    return this.empTask.get('department');
  }

  get getstartDate() {
    return this.empTask.get('startDate');
  }

  get getnoOfDay() {
    return this.empTask.get('noOfDay');
  }
  get getdescription() {
    return this.empTask.get('description')
  }

  displaytask = ""
  endDateS = ""
  

  addTask() {
    // console.log(this.empTask.value)
    this.emptaskarr = this.empTask.value;
    // console.log(this.emptaskarr[0].noOfDay)
    this.displaydate = true;
    var startdateresult = new Date(this.empTask.value.startDate)
    var noofdays = this.empTask.value.noOfDay;
    startdateresult.setDate(startdateresult.getDate() + Number(noofdays))
    this.displaytask = "You Have to Submit Work Till " + startdateresult.toLocaleDateString();
    this.endDateS = startdateresult.toLocaleDateString('fr-CA')
    this.empTask.value.enddate = this.endDateS;
    console.log(this.empTask.value.endData); //enddate done
    // this.displaytask = `you Have to submit work till ${resultendDate}`
    alert(this.displaytask);







    // let now: any = new Date();
    // let timeToAlarm = this.empTask.value.endData - now;


    // if (timeToAlarm >= 0) {
    //   setTimeout(() => {
    //     console.log("Ringing now")
    //   }, timeToAlarm);
    // }
    this._task.postTaskemp(this.empTask.value).subscribe({
      next: (res: any) => {
        // console.log(res)
        // window.location.reload();
      }
    })
  }

  closebtn() {
    this._router.navigate(['alltask'])
  }

}
