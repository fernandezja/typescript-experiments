export class Alumno {
    private nombre: string;
    private edad: number;
    private grado: string;

    constructor(nombre: string, edad: number, grado: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
    }

   
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getGrado(): string {
        return this.grado;
    }

    public setGrado(grado: string): void {
        this.grado = grado;
    }

    public toString(): string {
        return `Alumno: ${this.nombre}, Edad: ${this.edad}, Grado: ${this.grado}`;
    }
}

export default Alumno;