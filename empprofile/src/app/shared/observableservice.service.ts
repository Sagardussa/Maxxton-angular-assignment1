import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableserviceService {
  constructor() {}
  obs2 = interval(1000);

  print(val: any, containerId: any) {
    let li = document.createElement('li');
    li.innerHTML = val;
    let lis = document.getElementById(containerId);
    lis.appendChild(li);
  }
  hello = new Observable((observe) => {
    observe.next('hello from observable');
  });
}
