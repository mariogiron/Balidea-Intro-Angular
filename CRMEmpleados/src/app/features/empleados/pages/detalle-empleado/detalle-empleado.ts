import { Component, inject, input } from '@angular/core';
import { EmpleadosService } from '../../services/empleados-service';

@Component({
  selector: 'app-detalle-empleado',
  imports: [],
  templateUrl: './detalle-empleado.html',
  styleUrl: './detalle-empleado.css',
})
export class DetalleEmpleado {

  idEmpleado = input.required<string>();

  empleadosService = inject(EmpleadosService);

  empleado = this.empleadosService.getByIdResource(this.idEmpleado);

}
