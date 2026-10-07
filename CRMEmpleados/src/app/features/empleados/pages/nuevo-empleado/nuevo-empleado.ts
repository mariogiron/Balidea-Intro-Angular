import { Component, inject, signal } from '@angular/core';
import { Empleado } from '../../../../core/interfaces/empleado.interface';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { EmpleadosService } from '../../services/empleados-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  imports: [FormRoot, FormField],
  templateUrl: './nuevo-empleado.html',
  styleUrl: './nuevo-empleado.css',
})
export class NuevoEmpleado {

  protected readonly empleadosService = inject(EmpleadosService);
  protected readonly router = inject(Router);

  protected readonly empleado = signal<Empleado>({
    nombre: '', apellidos: '', email: '', telefono: '', departamento: '', salario: 0
  });

  protected readonly formulario = form(this.empleado, {
    submission: {
      action: async () => {
        try {
          const response = await this.empleadosService.create(this.empleado());
          console.log(response);
          // Volver a la lista de empleados
          this.router.navigateByUrl('/empleados');
        } catch (error) {
          console.log('Ha ocurrido un error');
        }
      }
    }
  });

}
