import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpserviceService {
  constructor(private http: HttpClient) { }



  // getEmployee(): any {
  //   return [
  //     {
  //       id: 1,
  //       fname: 'Sagar',
  //       lname: 'Dussa',
  //       gender: 'male',
  //       salary: 25000,
  //       hiredate: '1-10-2017',
  //       hra: 1000,
  //       da: 3000,
  //     },
  //     {
  //       id: 2,
  //       fname: 'Umesh',
  //       lname: 'Gardas',
  //       gender: 'male',
  //       salary: 30000,
  //       hiredate: '11-12-2014',
  //       hra: 1000,
  //       da: 3000,
  //     },
  //     {
  //       id: 3,
  //       fname: 'Pooja',
  //       lname: 'Dussa',
  //       gender: 'female',
  //       salary: 40000,
  //       hiredate: '11-12-2019',
  //       hra: 1000,
  //       da: 3000,
  //     },
  //     {
  //       id: 4,
  //       fname: 'Anand',
  //       lname: 'battul',
  //       gender: 'male',
  //       salary: 35000,
  //       hiredate: '11-12-2018',
  //       hra: 1000,
  //       da: 3000,
  //     },

  //     {
  //       id: 5,
  //       fname: 'vandana',
  //       lname: 'Dussa',
  //       gender: 'female',
  //       salary: 20000,
  //       hiredate: '11-12-2016',
  //       hra: 1000,
  //       da: 3000,
  //     },
  //     {
  //       id: 6,
  //       fname: 'vandana',
  //       lname: 'Dussa',
  //       gender: 'female',
  //       salary: 20000,
  //       hiredate: '11-12-2017',
  //       hra: 1000,
  //       da: 3000,
  //     },
  //     {
  //       id: 7,
  //       fname: 'Ram',
  //       lname: 'Dussa',
  //       gender: 'male',
  //       salary: 40000,
  //       hiredate: '11-12-2019',
  //       hra: 1000,
  //       da: 3000,
  //     },
  //   ];
  // }

  _url = "http://localhost:3000/Employee"
  getEmployee() {
    return this.http.get<any>(this._url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postEmployee(empdata: any) {
    return this.http.post<any>(this._url, empdata)
  }

}
