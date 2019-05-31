import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string = "";

  constructor(private deseosService: DeseosService,
    private route: ActivatedRoute) {
    const listaId = this.route.snapshot.paramMap.get('listaId');

    this.lista = this.deseosService.buscarLista(Number(listaId));
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem === "") {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = "";

    this.deseosService.guardarStorage();
  }

  cambioCheck(item) {
    let bandera:boolean = false;
    
    this.lista.items.forEach(item => {
      if (!item.completado) 
        return;
      bandera = true;
    });
    
    console.log("bandera -->", bandera);
    
    if (bandera) {
      this.lista.fechaTerminacion = new Date();
      this.lista.completada = true;
    } else {
      this.lista.fechaTerminacion = null;
      this.lista.completada = false;
    }

    this.deseosService.guardarStorage();
  }

  eliminarItem(id: number) {
    this.lista.items.splice(id, 1);
    this.deseosService.guardarStorage();
  }

}
