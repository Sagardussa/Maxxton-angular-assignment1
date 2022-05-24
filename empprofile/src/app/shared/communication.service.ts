import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public feedback = new Subject<string>();
  // public feedback = new BehaviorSubject<string>('hey');

  constructor() {}

  sendfeedback(msg: string) {
    this.feedback.next(msg);
  }
}
