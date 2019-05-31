import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listaDeseosTerminadas: Lista[];

  constructor(private deseosService: DeseosService) {
    this.listaDeseosTerminadas = this.deseosService.obtenerListas();
  }

  ionViewDidEnter() {
    console.log("tab 2");
    this.deseosService.filtro = true
    this.listaDeseosTerminadas = this.deseosService.obtenerListas();
    console.log(this.listaDeseosTerminadas);
  }
}
