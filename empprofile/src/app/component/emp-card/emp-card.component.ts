import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from 'src/app/shared/empservice.service';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent implements OnInit {
  empcard: any = []
  thumbstyle = ""

  constructor(private _emp: EmpserviceService) { }

  ngOnInit(): void {
    this._emp.getEmployee().subscribe({
      next: (res) => {
        // console.log(res)
        this.empcard = res
        for (let i of this.empcard) {
          const styles = i.id
          this.thumbstyle = styles
          console.log(this.thumbstyle)
        }
      }
    })

  }

}
