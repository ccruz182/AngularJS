import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listasDeseos: Lista[] = [];
  filtro: boolean = false;

  constructor() {
    this.obtenerStorage();
  }

  agregarLista(titulo: string): number {
    const nuevaLista: Lista = new Lista(titulo);
    this.listasDeseos.push(nuevaLista);    
    this.guardarStorage();

    return nuevaLista.id;
  }

  guardarStorage() {
    console.log("---", this.listasDeseos);
    localStorage.setItem('data', JSON.stringify(this.listasDeseos));
  }

  obtenerStorage() {
    this.listasDeseos = JSON.parse(localStorage.getItem('data'));

    if (this.listasDeseos === null) {
      this.listasDeseos = [];
    }
  }

  buscarLista(id: number): Lista {
    return this.listasDeseos.find( lista => lista.id === id);
  }

  obtenerListas() {
    console.log("Filtro", this.filtro);
    let listas = [...this.listasDeseos];

    if (this.filtro) {
      listas = listas.filter(lista => lista.completada);
    }

    return listas;
  }
}
