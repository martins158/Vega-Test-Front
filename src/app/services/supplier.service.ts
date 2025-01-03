import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../supplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

   constructor(private http: HttpClient ) {   }
 
   protected url: string = 'https://localhost:44381';
   protected urlSupplier: string = 'api/supplier';
   
   
   getSupplier(): Observable<Supplier[]> {
     return this.http.get<Supplier[]>(`${this.url}/${this.urlSupplier}/get`)
   }
   
   postSupplier(supplier: Supplier): Observable<Supplier> {
     return this.http.post<Supplier>(`${this.url}/${this.urlSupplier}/create`, supplier);
   }
 
   putSupplier(supplier: Supplier): Observable<Supplier> {
     return this.http.put<Supplier>(`${this.url}/${this.urlSupplier}/update`, supplier);
   }
 
   deleteSupplier(id: number): Observable<string> {
     return this.http.delete<string>(`${this.url}/${this.urlSupplier}/delete/${id}`);
   }
  

}
