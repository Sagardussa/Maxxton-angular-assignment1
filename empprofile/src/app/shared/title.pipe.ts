import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(fname: unknown, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr .' + fname;
    } else {
      return 'Ms .' + fname;
    }
  }
}
