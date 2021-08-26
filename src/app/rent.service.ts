import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { Iproperty } from './interfaces/property';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) {

   }
   
  getProperties():Observable<Iproperty>{
    return this.http.get<Iproperty>("https://rent-management-app.herokuapp.com/properties",httpOptions);

  }  
  
  getTenants(){
    return this.http.get("https://rent-management-app.herokuapp.com/tenants");
  
  }  
  
  getPayments(){
    return this.http.get("https://rent-management-app.herokuapp.com/payments");
  
  }  
}
