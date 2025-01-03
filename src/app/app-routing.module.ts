import { Supplier } from './supplier';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaterialComponent } from './components/material/material.component';
import { SupplierComponent } from './components/supplier/supplier.component';

import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { GetSupplierComponent } from './components/supplier/get-supplier/get-supplier.component';
import { UpdateSupplierComponent } from './components/supplier/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from './components/supplier/delete-supplier/delete-supplier.component';

import { AddMaterialComponent } from './components/material/add-material/add-material.component';
import { GetMaterialComponent } from './components/material/get-material/get-material.component';
import { UpdateMaterialComponent } from './components/material/update-material/update-material.component';
import { DeleteMaterialComponent } from './components/material/delete-material/delete-material.component';



const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'material', component: MaterialComponent },
  { path: 'supplier', component: SupplierComponent },
  
  { path: 'material/add', component: AddMaterialComponent },
  { path: 'material/get', component: GetMaterialComponent },
  { path: 'material/update', component: UpdateMaterialComponent },
  { path: 'material/delete', component: DeleteMaterialComponent },

  { path: 'supplier/add', component: AddSupplierComponent },
  { path: 'supplier/get', component: GetSupplierComponent },
  { path: 'supplier/update', component: UpdateSupplierComponent },
  { path: 'supplier/delete', component: DeleteSupplierComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
