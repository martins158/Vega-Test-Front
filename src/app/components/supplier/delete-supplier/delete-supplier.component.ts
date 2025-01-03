import { Component } from '@angular/core';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../supplier';

@Component({
  selector: 'app-delete-supplier',
  standalone: false,
  templateUrl: './delete-supplier.component.html',
  styleUrl: './delete-supplier.component.css'
})
export class DeleteSupplierComponent {

  constructor (public supplierService: SupplierService) { }
    
    public supplier: Supplier = {} as Supplier;
    
    public deleteResponse: string = '';
  
    deleteSupplierById(id: number){
      this.supplierService.deleteSupplier(id).subscribe({ 
        next: (response: string) => {
          this.deleteResponse = response;
        }
       })
  
      }
}
