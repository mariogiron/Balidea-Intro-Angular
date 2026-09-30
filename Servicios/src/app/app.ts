import { Component, inject, signal } from '@angular/core';
import { CarritoService } from './services/carrito-service';
import { LineaCarrito } from './interfaces/linea-carrito';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly carrito = inject(CarritoService);

}
