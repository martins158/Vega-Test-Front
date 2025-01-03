import { Component } from '@angular/core';
import { Supplier } from '../../../supplier';
import { SupplierService } from '../../../services/supplier.service';

@Component({
  selector: 'app-add-supplier',
  standalone: false,
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {

  public supplier: Supplier = {} as Supplier;
  public responseType: string = '';

  constructor(private supplierService: SupplierService) {}

  addSupplier(supplier: Supplier): void {
    this.supplierService.postSupplier(supplier).subscribe({
      next: (response) => {
       this.supplier = response;
       this.responseType = 'success';
      },
      error: (err) => {
       
        this.responseType = 'error'; 
      }
    });
  }
}
