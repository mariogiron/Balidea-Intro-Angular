import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  // Propiedades
  valor = signal<number>(0);
  doble = computed(() => this.valor() * 2);

  constructor() {
    effect(() => {
      localStorage.setItem('contador', String(this.valor()));
      console.log('Cambio valor', this.valor());
    });

    effect(() => {
      document.title = `Doble: ${this.doble()}`
    });

  }

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.valor.set(12);
  //   }, 3000);
  // }

  incrementar() {
    this.valor.update((v) => v + 1)
  }

  decrementar() {
    this.valor.update((v) => v - 1)
  }

  reiniciar() {
    this.valor.set(0);
  }

}