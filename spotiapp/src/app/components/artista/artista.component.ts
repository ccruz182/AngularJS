import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  @Input()
  artista: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getArtistImage(artista: any) {
    let resultado: string = "assets/img/noimage.png";

    if (artista.images.length != 0) {
      resultado = artista.images[0].url;
    }

    return resultado;
  }

  getTopTracksArtista(_id: string) {
    console.log(_id);
    this.router.navigate(['/artista', _id]);
  }

}
