import { Component } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs";
import { AlertController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  eventos: Observable<any[]>;

  ultimo: string;
  diferencia: number;
  promedio: number;
  HORAS: number = 1000 * 60 * 60;

  constructor(
    private afDB: AngularFireDatabase,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.eventos = afDB.list("evento").valueChanges();

    this.eventos.subscribe(data => {
      const eventosPasados = [...data];
      const fechasPasadas = [];

      eventosPasados.forEach(eventoPasado => {
        fechasPasadas.push(eventoPasado.hora);
      });

      /* Se muestra la última vez y se calcula la diferencia */
      fechasPasadas.sort().reverse();
      const ahora: number = new Date().getTime();
      this.diferencia = (ahora - fechasPasadas[0]) / this.HORAS;

      this.ultimo = fechasPasadas[0];

      /* Promedio de cada cuanto trabaja */
      let promedioFecha: number = 0;
      for (let i = 0; i < fechasPasadas.length - 1; i++) {
        promedioFecha += fechasPasadas[i] - fechasPasadas[i + 1];
      }
      this.promedio = promedioFecha / (fechasPasadas.length - 1);
      this.promedio = this.promedio / this.HORAS;
    });
  }

  agregaEventoAhora() {
    const evento = {
      finalizado: false,
      hora: new Date().getTime()
    };

    this.agregarEventoABase(evento);
  }

  async agregaEventoPasado() {
    const alert = await this.alertCtrl.create({
      header: "Nueva Evento Pasado",
      inputs: [
        {
          name: "fecha",
          type: "date",
          placeholder: "Fecha del evento"
        },
        {
          name: "hora",
          type: "time",
          placeholder: "Hora del evento"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "danger"
        },
        {
          text: "Crear",
          handler: data => {
            this.prepararFecha(data);
          }
        }
      ]
    });

    alert.present();
  }

  prepararFecha(data) {
    const fechaStr: string = `${data["fecha"]}T${data["hora"]}Z`;
    console.log(fechaStr);
    const fechaEventoPasado = new Date(fechaStr);
    const msFechaEventoPasadoHrLocal =
      fechaEventoPasado.getTime() +
      fechaEventoPasado.getTimezoneOffset() * 60000;

    const evento = {
      finalizado: false,
      hora: new Date(msFechaEventoPasadoHrLocal).getTime()
    };
    
    this.agregarEventoABase(evento);
  }

  agregarEventoABase(evento: any) {
    const eventos = this.afDB.list("/evento");
    eventos.push(evento);
  }
}
