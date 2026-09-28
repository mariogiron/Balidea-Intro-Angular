import { Component, computed, signal } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos {

  protected readonly productos = signal<Producto[]>([
    { id: 1, nombre: 'Teclado', categoria: 'Periféricos', precio: 45, stock: 12 },
    { id: 2, nombre: 'Monitor', categoria: 'Pantallas', precio: 210, stock: 3 },
    { id: 3, nombre: 'Ratón', categoria: 'Periféricos', precio: 25, stock: 0 },
  ]);

  protected readonly visible = computed(() => {
    return this.productos().filter((p) => p.stock > 10)
  });

  onClick() {
    this.productos.update((value) => {
      return [...value, {
        id: Date.now(), nombre: 'Webcam', categoria: 'Video', precio: 35, stock: 12
      }]
    })
  }

  onBorrar() {
    this.productos.set([]);
  }

}
