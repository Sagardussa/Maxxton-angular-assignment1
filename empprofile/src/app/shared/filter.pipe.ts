import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sname: string): any {
    return value.filter(
      (emp: any) => emp.fname.toLowerCase().indexOf(sname) > -1
    );
  }
}
