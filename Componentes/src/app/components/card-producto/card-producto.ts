import { Component, input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'card-producto',
  imports: [],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.css',
})
export class CardProducto {

  producto = input.required<Producto>();

}
