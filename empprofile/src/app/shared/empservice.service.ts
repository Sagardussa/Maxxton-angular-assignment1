import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpserviceService {
  constructor(private http: HttpClient) { }

  _url = "http://localhost:3000/Employee/"
  postEmployee(empdata: any) {
    return this.http.post<any>(this._url, empdata)
  }


  getEmployee() {
    return this.http.get<any>(this._url)
  }

  getEmployeeById(id: any) {
    return this.http.get<any>(this._url + id)
  }


}
