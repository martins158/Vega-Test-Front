import { Component } from '@angular/core';
import { Material } from '../../material';

@Component({
  selector: 'app-material',
  standalone: false,
  
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  material: Material = new Material();
  onSubmit() {
    console.log(this.material);
}
}
