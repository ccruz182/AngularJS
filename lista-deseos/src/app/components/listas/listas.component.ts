import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  
  @Input()
  listaDeseos: Lista[];

  constructor(private deseosService: DeseosService,
    private router: Router) {
    // this.listaDeseos = this.deseosService.obtenerListas();  
    
  }

  ngOnInit() {    
  }

  redireccionarAgregar(id: number) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
  }

}
