import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  eventos: Observable<any[]>;

  ultimo: string;
  diferencia: number;

  constructor(private afDB: AngularFireDatabase,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {

    this.eventos = afDB.list('evento').valueChanges();
    
    this.eventos.subscribe(data => {      
      const eventosPasados = [...data];
      const fechasPasadas = [];

      eventosPasados.forEach(eventoPasado => {
        fechasPasadas.push(eventoPasado.hora);
      });

      fechasPasadas.sort().reverse();
      const ahora: number = new Date().getTime();
      this.diferencia = (ahora - fechasPasadas[0]) / (1000 * 60 * 60);

      this.ultimo = fechasPasadas[0];
    });
  }

  agregaEventoAhora() {
    const evento = {
      finalizado: false,
      hora: new Date().getTime()
    }

    this.agregarEventoABase(evento);
  }
  
  agregarEventoABase(evento: any) {
    const eventos = this.afDB.list('/evento');
    eventos.push(evento);
  }
}
