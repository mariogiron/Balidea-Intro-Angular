import { Component, inject, signal } from '@angular/core';
import { CarritoService } from './services/carrito-service';
import { LineaCarrito } from './interfaces/linea-carrito';
import { CurrencyPipe } from '@angular/common';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

const PRODUCTOS = ['Teclado', 'Monitor', 'Ratón', 'Webcam', 'Micrófono'];

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly carrito = inject(CarritoService);

  protected readonly texto = signal('');

  protected readonly resultados = toSignal(
    toObservable(this.texto).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((busqueda) => PRODUCTOS.filter((p) => p.toLowerCase().includes(busqueda.toLowerCase()))),
    ),
    { initialValue: PRODUCTOS },
  );


}
