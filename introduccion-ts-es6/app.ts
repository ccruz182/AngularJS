function saludar(nombre: string) {
    console.log("hola " + nombre);
}

const wolverine = {
    nombre: "Logan"
};

saludar(wolverine.nombre);


/* Variables tipadas en TS */
let nombre: string = "Cesar";
let numero: number = 120;
let booleano: boolean = true;

let fechaHoy: Date = new Date("2019-10-04");

let cualquiera: any;

cualquiera = "perro";
cualquiera = 123;

// nombre = 11; // Error

const activacion = (quien: string,
    fecha: string = "hoy",
    razon?: string) => {
    if (razon) {
        console.log(`${quien} activo el dia de ${fecha} ya que ${razon}`)
    } else {
        console.log(`${quien} activo el dia de ${fecha}`)
    }

}

activacion("Cesar", "hoy", "porque quiso");