import { Routes } from '@angular/router';
import { ListaEmpleados } from './features/empleados/pages/lista-empleados/lista-empleados';
import { DetalleEmpleado } from './features/empleados/pages/detalle-empleado/detalle-empleado';
import { NuevoEmpleado } from './features/empleados/pages/nuevo-empleado/nuevo-empleado';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/empleados',
        pathMatch: 'full'
    },
    {
        path: 'empleados',
        loadComponent: () => import('./features/empleados/pages/lista-empleados/lista-empleados').then(m => m.ListaEmpleados),
        title: 'Lista de Empleados'
    },
    {
        path: 'empleados/nuevo',
        component: NuevoEmpleado,
        title: 'Nuevo Empleado'
    },
    {
        path: 'empleados/:idEmpleado',
        component: DetalleEmpleado,
        title: 'Detalle Empleado'
    },
    {
        path: '**',
        redirectTo: '/empleados'
    }
];