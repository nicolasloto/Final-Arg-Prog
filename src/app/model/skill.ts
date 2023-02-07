export class Skill {
    id: number;
    nombre: string;
    percent: number;

    constructor(nombre: string, percent: number){
        this.nombre = nombre;
        this.percent = percent;
    }
}
