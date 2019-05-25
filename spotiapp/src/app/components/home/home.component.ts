import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  materialNuevo:any[] = []

  constructor(private spotifyService:SpotifyService) {
    this.spotifyService.getNewReleases().subscribe((data:any) => {
      this.materialNuevo = data.albums.items;
      console.log(this.materialNuevo);
    });         
  }

}
