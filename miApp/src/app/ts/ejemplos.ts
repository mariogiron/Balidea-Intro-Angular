let num: number;
num = 3;

let cosa: any = 3;
cosa = 'hola';
cosa = true;
cosa = [1, 2, 3, 4];

// number, string, boolean, undefined, null, any, Array

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponibilidad: boolean;
    stock?: number;
}

const prod: Producto = {
    id: 1,
    nombre: 'Lo que sea',
    precio: 43,
    disponibilidad: true,
    stock: 23
}

// noImplicitAny
function sumar(a: number, b: number) {
    return a + b;
}

sumar(2, 3);

// strictNullChecks
export interface LineaPedido {
    producto: string;
    precio: number;
    cantidad: number;
}

const lineas: LineaPedido[] = [
    { producto: 'Teclado', precio: 45, cantidad: 1 },
    { producto: 'Monitor', precio: 210, cantidad: 2 }
];

const monitor = lineas.find((l) => l.producto === 'Monitor');

if (monitor) console.log(monitor.precio);

console.log(monitor?.precio)

const precio = monitor?.precio ?? 0;


interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponibilidad: boolean;
    stock?: number;
}

type tipoBusqueda2 = 'encontrado' | 'no-encontrado' | 'error';
type tipoBusqueda = number | undefined;

function busquedaV2(cadena: string): tipoBusqueda2 {
    return 'no-encontrado';
}

function busqueda(cadena: string): tipoBusqueda {
    return 5;
}

// Tipos genéricos
const numeros: Array<number> = [1, 2, 3, 4, 5];