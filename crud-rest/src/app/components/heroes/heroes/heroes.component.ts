import { Component, OnInit } from "@angular/core";

import { HeroesService } from "../../../services/heroes.service";
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  
  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe((data: any) => {      
      const heroesData: Heroe[] = Object.values(JSON.parse(data._body));
      const heroesKeys = Object.keys(JSON.parse(data._body));

      heroesKeys.forEach((key, i) => {
        this.heroes.push({
          nombre: heroesData[i].nombre,
          casa: heroesData[i].casa,
          bio: heroesData[i].bio,
          key$: key
        });
      })            
    });
  }

  ngOnInit() {}
}
