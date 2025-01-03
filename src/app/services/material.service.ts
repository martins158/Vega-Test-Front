import { Material } from './../material';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient ) {   }

  protected url: string = 'https://localhost:44381';
  protected urlMaterial: string = 'api/material';
  
  //protected urlSupplier: string = '/api/supplier/'; supplierService
  
  getMaterial(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.url}/${this.urlMaterial}/get`)
  }
  
  postMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.url}/${this.urlMaterial}/create`, material);
  }

  putMaterial(material: Material): Observable<Material> {
    console.log("MAMA eu");
    return this.http.put<Material>(`${this.url}/${this.urlMaterial}/update`, material);
  }

  deleteMaterial(id: number): Observable<string> {
    return this.http.delete<string>(`${this.url}/${this.urlMaterial}/delete/${id}`);
  }
}
