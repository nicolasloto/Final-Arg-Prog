export class Experiencia {
    id: number;
    nombreXP: string;
    descXP: string;
    inicioXP: string;
    finalXP: string;

    constructor(nombreXP: string, descXP: string, inicioXP: string, finalXP: string) {
        this.nombreXP = nombreXP;
        this.descXP = descXP;
        this.inicioXP = inicioXP;
        this.finalXP = finalXP;
    }
}
