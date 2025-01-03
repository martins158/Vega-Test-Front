import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './components/material/material.component';
import { HomeComponent } from './components/home/home.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { AddMaterialComponent } from './components/material/add-material/add-material.component';
import { GetMaterialComponent } from './components/material/get-material/get-material.component';
import { UpdateMaterialComponent } from './components/material/update-material/update-material.component';
import { DeleteMaterialComponent } from './components/material/delete-material/delete-material.component';
import { GetSupplierComponent } from './components/supplier/get-supplier/get-supplier.component';
import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from './components/supplier/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from './components/supplier/delete-supplier/delete-supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    HomeComponent,
    SupplierComponent,
    AddMaterialComponent,
    GetMaterialComponent,
    UpdateMaterialComponent,
    DeleteMaterialComponent,
    GetSupplierComponent,
    AddSupplierComponent,
    UpdateSupplierComponent,
    DeleteSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
