import { Component } from '@angular/core';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../supplier';

@Component({
  selector: 'app-update-supplier',
  standalone: false,
  
  templateUrl: './update-supplier.component.html',
  styleUrl: './update-supplier.component.css'
})
export class UpdateSupplierComponent {
 
  constructor (public supplierService: SupplierService) { }
    
  public supplier: Supplier = {} as Supplier;
  
  updateSupplier(supplier: Supplier){
    this.supplierService.putSupplier(supplier).subscribe({ 
      next: (supplier) => {
        this.supplier = supplier;
      }
     })
    }
}
