import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listasDeseos: Lista[] = [];

  constructor() {
    const lista1 = new Lista("Sacar a Kari");
    const lista2 = new Lista("Alimentar a Kari");

    this.listasDeseos.push(lista1, lista2);
  }
}
