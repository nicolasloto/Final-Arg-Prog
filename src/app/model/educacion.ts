export class Educacion {
    id: number;
    nombreEd: string;
    descEd: string;
    inicioEd: string;
    finalEd: string;

    constructor(nombreEd: string, descEd: string, inicioEd: string, finalEd: string){
        this.nombreEd = nombreEd;
        this.descEd = descEd;
        this.inicioEd = inicioEd;
        this.finalEd = finalEd;
    }
}