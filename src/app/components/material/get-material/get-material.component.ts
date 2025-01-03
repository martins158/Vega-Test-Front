import { Component } from '@angular/core';
import { Material } from '../../../material';
import { MaterialService } from '../../../services/material.service';

@Component({
  selector: 'app-get-material',
  standalone: false,
  
  templateUrl: './get-material.component.html',
  styleUrl: './get-material.component.css'
})
export class GetMaterialComponent {

  constructor (public materialService: MaterialService) { }

  public materials: Material[] = [];
  public materialId: number = 0;
  public filteredMaterials: Material[] = [];
  public filter: any = { name: '', createdAt: '' };
  

  ngOnInit() {
    
    this.getAllMaterials();
  }


getAllMaterials(): void{
    this.materialService.getMaterial().subscribe({ 
      next: (materials) => {
        this.materials = materials;
        this.applyFilter();
      }
     });

  }

  applyFilter(): void {
    this.filteredMaterials = this.materials.filter((material) => {
      const nameMatch = material.name.toLowerCase().includes(this.filter.name.toLowerCase());
      
      const dateMatch = this.filter.createdAt
  ? this.formatDate(material.createdAt) === this.filter.createdAt
  : true;

      
      return nameMatch && dateMatch;
    });
  }
  
  formatDate(date: any): string {
    const dateObj = (typeof date === 'string' || date instanceof String) ? new Date(date.toString()) : date;
    
    if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
      return ''; 
    }
  
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  
  
  
  
  printMaterials(): void {
    const printContent = this.generatePrintContent();
    const printWindow = window.open('', '', 'height=650, width=900');
    printWindow?.document.write('<html><head><title>Print Materials</title><style>');
    printWindow?.document.write(`
      body { font-family: Arial, sans-serif; font-size: 14px; margin: 20px; }
      .card { border: 1px solid #ccc; margin-bottom: 10px; padding: 10px; }
      .card-header { background-color: #007bff; color: white; padding: 5px; }
      .card-body { padding: 10px; }
      h6 { margin: 0; }
      p { margin: 5px 0; }
    `);
    printWindow?.document.write('</style></head><body>');
    printWindow?.document.write(printContent);
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.print();
  }

  generatePrintContent(): string {
    let content = '<h2>Material List</h2>';
    this.filteredMaterials.forEach(material => {
      content += `
        <div class="card">
          <div class="card-header">Material ID: ${material.id}</div>
          <div class="card-body">
            <p><strong>Name:</strong> ${material.name}</p>
            <p><strong>Code:</strong> ${material.code}</p>
            <p><strong>Description:</strong> ${material.description}</p>
            <p><strong>Fiscal Code:</strong> ${material.fiscalCode}</p>
            <p><strong>Specie:</strong> ${material.specie}</p>
            <p><strong>Created At:</strong> ${this.formatDate(material.createdAt)}</p>
            <p><strong>Created By:</strong> ${material.createdBy}</p>
            ${material.updatedAt ? `<p><strong>Updated At:</strong> ${this.formatDate(material.updatedAt)} </p>` : ''}
            ${material.updatedBy ? `<p><strong>Updated By:</strong> ${material.updatedBy}</p>` : ''}
          </div>
        </div>
      `;
    });
    return content;
  }
  
}
  


