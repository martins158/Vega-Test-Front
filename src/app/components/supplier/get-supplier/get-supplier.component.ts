import { Component } from '@angular/core';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../supplier';

@Component({
  selector: 'app-get-supplier',
  standalone: false,
  templateUrl: './get-supplier.component.html',
  styleUrls: ['./get-supplier.component.css']
})
export class GetSupplierComponent {

  constructor(public supplierService: SupplierService) {}

  public suppliers: Supplier[] = [];
  public filteredSuppliers: Supplier[] = [];
  public filter: any = { name: '', registDate: '' };

  ngOnInit() {
    this.getAllSuppliers();
  }

  getAllSuppliers(): void {
    this.supplierService.getSupplier().subscribe({
      next: (suppliers) => {
        this.suppliers = suppliers;
        this.applyFilter();
      },
      error: (err) => {
        console.error('Error fetching suppliers:', err);
      }
    });
  }

  applyFilter(): void {
    this.filteredSuppliers = this.suppliers.filter((supplier) => {
      const nameMatch = supplier.name.toLowerCase().includes(this.filter.name.toLowerCase());
      const dateMatch = this.filter.registDate
        ? this.formatDate(supplier.registDate) === this.filter.registDate
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

  printSuppliers(): void {
    const printContent = this.generatePrintContent();
    const printWindow = window.open('', '', 'height=650, width=900');
    printWindow?.document.write('<html><head><title>Print Suppliers</title><style>');
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
    let content = '<h2>Supplier List</h2>';
    this.filteredSuppliers.forEach(supplier => {
      content += `
        <div class="card">
          <div class="card-header">Supplier ID: ${supplier.id}</div>
          <div class="card-body">
            <p><strong>Name:</strong> ${supplier.name}</p>
            <p><strong>CNPJ:</strong> ${supplier.cnpj}</p>
            <p><strong>QR Code:</strong> ${supplier.qrCode}</p>
            <p><strong>Country:</strong> ${supplier.country}</p>
            <p><strong>Regist Date:</strong> ${this.formatDate(supplier.registDate)}</p>
          </div>
        </div>
      `;
    });
    return content;
  }
}
