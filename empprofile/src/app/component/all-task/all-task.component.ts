import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from 'src/app/shared/taskservice.service';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {
  searchvalue = ""
  empTaskarr: any = '';
  now: any;
  display: any;
  show: boolean = false;

  constructor(private task: TaskserviceService,) { }

  ngOnInit(): void {
    this.getTaskemp();
    this.getnotify();
  }



  getTaskemp() {
    this.task.getTaskemp().subscribe({
      next: (data) => {

        this.empTaskarr = data
        console.log(this.empTaskarr)
        for (let i = 0; i < this.empTaskarr.length; i++) {
          if (this.now == this.empTaskarr[i].enddate) {
            // this.notifier.notify('success', this.empTaskarr[i].employee + " Today your work as to be submit")
            // alert(this.empTaskarr[i].employee + " Today your work as to be submitted")
            this.show = true;
            this.display = (this.empTaskarr[i].employee + " Today your work as to be submitted")

          }
        }
      }
    })
  }




  getnotify() {
    let date = new Date();
    this.now = date.toLocaleDateString('fr-CA')
  }

  Delete(id: any) {
    this.task.getDelete(id).subscribe({
      complete: () => {
        window.location.reload();
      }
    })

  }

  Edit(id: any) {
    console.log(id);
  }

}



















