import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp',
})
export class ExpPipe implements PipeTransform {
  transform(hdate: string): number {
    let today = new Date().getFullYear();
    // let hiredate = new Date(hdate).getFullYear();
    // return today - hiredate;
    let hiredate = hdate.split('-');
    return today - Number(hiredate[2]);
  }
}
