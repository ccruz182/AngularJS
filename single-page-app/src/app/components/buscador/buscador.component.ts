import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Heroe, HeroesService } from "../../services/heroes.service"

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroesBusqueda:Heroe[] = [];
  existenciaResultados:boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroesBusqueda = this._heroesService.buscarHeroes(params["termino"]);

      if (this.heroesBusqueda.length == 0) {
        this.existenciaResultados = false;
      } else {
        this.existenciaResultados = true;
      }
    });
  }

}
