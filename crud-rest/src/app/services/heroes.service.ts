import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Heroe } from "../interfaces/heroe.interface";
// import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  heroesURL: string = "https://crud-rest.firebaseio.com/heroes.json";
  heroeURL: string = "https://crud-rest.firebaseio.com/heroes";

  constructor(private http: Http) {}

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);

    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post(this.heroesURL, body, { headers });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);

    const headers = new Headers({
      "Content-Type": "application/json"
    });

    const url = `${this.heroeURL}/${key$}.json`;

    return this.http.put(url, body, { headers });
  }

  getHeroe(key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;

    return this.http.get(url);
  }

  getHeroes() {
    return this.http.get(this.heroesURL);
  }

  eliminarHeroe(key$: string) {
    const urlDelete = `${this.heroeURL}/${key$}.json`;
    
    return this.http.delete(urlDelete);
  }
}
