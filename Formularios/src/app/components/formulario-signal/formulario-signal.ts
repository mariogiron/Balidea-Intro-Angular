import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';

interface Contacto {
  nombre: string;
  email: string;
  activo: boolean;
}

@Component({
  selector: 'app-formulario-signal',
  imports: [FormField, JsonPipe, FormRoot],
  templateUrl: './formulario-signal.html',
  styleUrl: './formulario-signal.css',
})
export class FormularioSignal {

  protected readonly contacto = signal<Contacto>({
    nombre: '', email: '', activo: false
  });

  protected readonly formulario = form(
    this.contacto,
    (p) => {
      required(p.nombre, { message: 'El campo nombre es requerido' });
      minLength(p.nombre, 3, { message: 'El campo nombre debe tener 3 caracteres' });
    },
    {
      submission: {
        action: async (formulario) => {
          console.log(this.contacto())
        },
        onInvalid: () => {
          console.log('El formulario tiene errores');
        }
      }
    }
  );

}
