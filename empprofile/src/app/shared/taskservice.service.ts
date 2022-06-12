import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  _urltask = "http://localhost:3000/Task/"

  constructor(private http: HttpClient) { }


  postTaskemp(taskData: any) {
    return this.http.post(this._urltask, taskData)
  }

  getTaskemp() {
    return this.http.get(this._urltask)

  }

  getDelete(emptask: any) {
    return this.http.delete(this._urltask + emptask);
  }


}
