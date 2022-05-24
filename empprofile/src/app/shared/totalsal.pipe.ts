import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalsal',
})
export class TotalsalPipe implements PipeTransform {
  transform(salary: number, hra: number, da: number): number {
    return salary + hra + da;
  }
}
