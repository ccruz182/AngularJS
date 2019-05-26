import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-tracks-artista',
  templateUrl: './top-tracks-artista.component.html',
  styles: []
})
export class TopTracksArtistaComponent implements OnInit {

  topTracks: any[] = []

  constructor(private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService) { }

  ngOnInit() {    
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;    
      this.spotifyService.getTopTracksOfArtist(id).subscribe((data: any) => {        
        this.topTracks = data;
        console.log(this.topTracks)        
      });
    })
  }

}
