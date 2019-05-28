import { ListaItem } from './lista-item.model';

export class Lista {
  id: number;
  titulo: string;
  fechaCreacion: Date;
  fechaTerminacion: Date;
  completada: boolean;
  items: ListaItem[];

  constructor(titulo: string) {
    this.titulo = titulo;
    this.completada = false;
    this.fechaCreacion = new Date();
    this.items = [];
    this.id = new Date().getTime();
  }
}