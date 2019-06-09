import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  eventos:Observable<any[]>;
  fechasPasadas: any[] = [];

  constructor(private afDB: AngularFireDatabase) {    
    // this.eventos = afDB.list('evento').valueChanges();    
  }

  ionViewDidEnter() {
    this.fechasPasadas = [];
    this.eventos = this.afDB.list('evento').valueChanges();
    
    this.eventos.subscribe(data => {  
      const eventosPasados = [...data];      

      eventosPasados.forEach(eventoPasado => {
        this.fechasPasadas.push(eventoPasado.hora);
      });

      /* Se muestra la última vez y se calcula la diferencia */
      this.fechasPasadas.sort().reverse();    
    })
  }

}
