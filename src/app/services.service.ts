import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) {
    
   }
   mobiles=["Vivo","Oppo"]
   getData(){
    this.http.get('https://fakestoreapi.com/products?limit=5').subscribe((data)=>{console.log(data)});
   }

}
