import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private _http: any;
  constructor(private http: HttpClient) {}

  saleproductlist() {
    return this.http.get<any>('http://localhost:3000/saleProduct').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  newproductlist() {
    return this.http.get<any>('http://localhost:3000/newArrivals').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
