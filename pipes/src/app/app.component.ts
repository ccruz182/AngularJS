import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Cesar";
  nombre2: string = "cesar cRuz ArrEdonDo";
  arreglo: number[] = [1, 2, 3, 4, 5];
  PI = Math.PI;
  a: number = 0.234;
  salario: number = 12345.09;

  persona = {
    nombre: "Cesar",
    edad: 22
  }

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Llego la info"), 3500);
  });

  fecha = "2012-04-30";

  spoti = "4QlzkaRHtU8gAdwqjWmO8n";

  contrasena: string = "contra1234";
  textoBoton: string = "Activar";
  claseBoton: string = "btn-outline-success";
  estadoContPipe: boolean = false;


  cambiarEstadoContPipe() {
    if (! this.estadoContPipe) {
      this.textoBoton = "Desactivar";
      this.claseBoton = "btn-outline-danger";
      this.estadoContPipe = true;
    } else {
      this.textoBoton = "Activar";
      this.claseBoton = "btn-outline-success";
      this.estadoContPipe = false;
    }
  }
}
