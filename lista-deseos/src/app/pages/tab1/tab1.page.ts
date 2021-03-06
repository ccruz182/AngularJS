import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaDeseos: Lista[];

  constructor(private deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {

    this.listaDeseos = this.deseosService.obtenerListas();
  }

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Crear',
          handler: (data) => this.agregarAListas(data)
        }
      ]
    });

    alert.present();
    // this.router.navigateByUrl("/tabs/tab1/agregar");
  }

  async agregarAListas(data) {
    const { titulo } = data;

    if (titulo == "") {
      return;
    }

    const idListaAgregada: number =
      this.deseosService.agregarLista(titulo);

    const toast = await this.toastCtrl.create({
      message: 'La lista se añadió correctamente',
      duration: 1500,
      position: 'middle'
    });

    toast.present();

    this.router.navigateByUrl(`/tabs/tab1/agregar/${idListaAgregada}`);
  }


  redireccionarAgregar(id: number) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
  }


  ionViewDidEnter() {    
    this.deseosService.filtro = false;
    this.listaDeseos = this.deseosService.obtenerListas();    
  }

  eliminarLista = (id: number) => {    
    this.deseosService.eliminarLista(id);
    this.deseosService.guardarStorage(); 
    this.ionViewDidEnter();
  }
}
