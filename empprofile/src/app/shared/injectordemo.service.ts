import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InjectordemoService {
  component = 'root';
  constructor() {}
  log(msg: string) {
    return console.log(` component ${this.component} message: ${msg}`);
  }
}
