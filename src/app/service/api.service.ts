import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  id :any;
  res : any;
  constructor(private http : HttpClient) { }
  
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductById(id: number){
  return this.http.get<any>("https://fakestoreapi.com/products/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))

  }
}
