// Uso de Let y Const
let nombre2 = "Ricardo Tapia";
let edad = 23;

const PERSONAJE = {
  nombre: nombre2,
  edad: edad
};
 
interface Persona {
    nombre:string;
    artesMarciales: string[];
}
 
// Cree una interfaz que sirva para validar el siguiente objeto
var batman:Persona = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
 
 
// Convertir esta funcion a una funcion de flecha
const resultadoDoble = ( a:number, b:number ) => {
  return (a + b) * 2
}
 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

class Rectangulo {
    base:number;
    altura:number;

    constructor (base:number, altura:number) {
        this.altura = altura;
        this.base = base;        
    }

    calcularArea() : number {
        return this.altura * this.base;
    }
}
 