"use strict";
function saludar(nombre) {
    console.log("hola " + nombre);
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
/* Variables tipadas en TS */
var nombre = "Cesar";
var numero = 120;
var booleano = true;
var fechaHoy = new Date("2019-10-04");
var cualquiera;
cualquiera = "perro";
cualquiera = 123;
// nombre = 11; // Error
var activacion = function (quien, fecha, razon) {
    if (fecha === void 0) { fecha = "hoy"; }
    if (razon) {
        console.log(quien + " activo el dia de " + fecha + " ya que " + razon);
    }
    else {
        console.log(quien + " activo el dia de " + fecha);
    }
};
activacion("Cesar", "hoy", "porque quiso");
