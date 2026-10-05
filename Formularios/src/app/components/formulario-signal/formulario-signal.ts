import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface Contacto {
  nombre: string;
  email: string;
  activo: boolean;
}

@Component({
  selector: 'app-formulario-signal',
  imports: [FormField, JsonPipe],
  templateUrl: './formulario-signal.html',
  styleUrl: './formulario-signal.css',
})
export class FormularioSignal {

  protected readonly contacto = signal<Contacto>({
    nombre: '', email: '', activo: false
  });

  protected readonly formulario = form(this.contacto);

}
