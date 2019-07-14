import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-opciones",
  templateUrl: "./opciones.component.html",
  styles: []
})
export class OpcionesComponent implements OnInit {
  @Input() elementKey: string;

  constructor(private router: Router, private heroesService: HeroesService) {}

  ngOnInit() {}

  actualizar() {
    this.router.navigate(["/heroe", this.elementKey]);
  }

  eliminar() {
    this.heroesService.eliminarHeroe(this.elementKey).subscribe(data => {      
      window.location.reload();
    });
  }
}
