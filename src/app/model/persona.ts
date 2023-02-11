export class Persona {
    id?: number;
    nombre: string;
    titulo: string;
    descripcion: string;

    constructor(nombre: string, titulo: string, descripcion: string) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}