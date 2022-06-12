import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'

})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchval: string): any {
    if (!value || !searchval) {
      return value;
    }
    return value.filter((emp: any) =>
      emp.employee.toLowerCase().indexOf(searchval.toLowerCase()) > -1 ||
      emp.department.toLowerCase().indexOf(searchval.toLowerCase()) > -1 ||
      emp.startDate.toLowerCase().indexOf(searchval.toLowerCase()) > -1 ||
      emp.enddate.toLowerCase().indexOf(searchval.toLowerCase()) > -1
    );

  }

}
