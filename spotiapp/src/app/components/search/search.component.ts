import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  busquedaArtista(artista: string) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      this.spotifyService.getArtist(artista).subscribe((data: any) => {
        this.artistas = data.artists.items;
      });
      
    }, 1500);
  }

}
