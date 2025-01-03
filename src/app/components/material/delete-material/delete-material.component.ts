import { Component } from '@angular/core';
import { MaterialService } from '../../../services/material.service';
import { Material } from '../../../material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-material',
  standalone: false,
  
  templateUrl: './delete-material.component.html',
  styleUrl: './delete-material.component.css'
})
export class DeleteMaterialComponent {

  constructor (public materialService: MaterialService) { }
  
  public material: Material = {} as Material;
  
  public deleteResponse: string = '';

  deleteMaterialById(id: number){
    this.materialService.deleteMaterial(id).subscribe({ 
      next: (response: string) => {
        this.deleteResponse = response;
      }
     })

    }
  }