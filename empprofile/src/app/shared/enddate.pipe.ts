import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enddate'
})
export class EnddatePipe implements PipeTransform {

  transform(startdate: any, noOfDay: any): any {
    var result = new Date(startdate);
    return result.setDate(result.getDate() + Number(noOfDay))
  }

}
