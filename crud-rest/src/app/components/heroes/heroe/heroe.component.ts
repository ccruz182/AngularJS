import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Heroe } from "../../../interfaces/heroe.interface";
import { HeroesService } from "../../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroe = {
    bio: "",
    casa: "Marvel",
    nombre: ""
  };

  isNuevo: boolean = true;
  firebaseId: string = "";

  constructor(
    private heroeService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.firebaseId = id;

      if (id !== "nuevo") {
        this.isNuevo = false;
        this.heroeService.getHeroe(id).subscribe((data:any) => {
          this.heroe = JSON.parse(data._body);
        });
      }
    });
  }

  ngOnInit() {}

  guardar() {
    if (this.isNuevo) {
      console.log(this.heroe);

      this.heroeService.nuevoHeroe(this.heroe).subscribe((data: any) => {
        const { name } = JSON.parse(data._body);
        this.router.navigate(["/heroe", name]);
      });
    } else {
      this.heroeService.actualizarHeroe(this.heroe, this.firebaseId).subscribe(data => {
        console.log("Actualizado!!");
      })
    }
  } 
}
