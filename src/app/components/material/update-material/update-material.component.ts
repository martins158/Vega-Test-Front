import { Component } from '@angular/core';
import { MaterialService } from '../../../services/material.service';
import { Material } from '../../../material';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../supplier';

@Component({
  selector: 'app-update-material',
  standalone: false,
  
  templateUrl: './update-material.component.html',
  styleUrl: './update-material.component.css'
})
export class UpdateMaterialComponent {

  constructor (public materialService: MaterialService, public SupplierService: SupplierService) { }
  
  public material: Material = {} as Material;
  public suppliersData: { supplierId: number, qrCode: string }[] = [];
  public selectedQrCode?: string = '';
  
  ngOnInit(){
    this.getSupplierIdsAndQrCode();
      

  }

  updateMaterial(material: Material){
    this.materialService.putMaterial(material).subscribe({ 
      next: (material) => {
        this.material = material;
        console.log(this.material);
      }
     })
    }
    
    
    getSupplierIdsAndQrCode() {
        this.SupplierService.getSupplier().subscribe((suppliers: Supplier[]) => {
          this.suppliersData = suppliers.map((supplier) => ({
            supplierId: supplier.id,
            qrCode: supplier.qrCode
          }));
        });
      }

    onSupplierChange(event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      const supplierId = Number(selectElement.value);
    
      const supplier = this.suppliersData.find((s) => s.supplierId === supplierId);
      this.selectedQrCode = supplier ? this.formatQrCode(supplier.qrCode) : '';
    }
    
    formatQrCode(qrCode: string): string {
      return qrCode.replace(/%/g, ''); 
    }

}
