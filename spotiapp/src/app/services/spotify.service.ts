import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable()
export class SpotifyService {
  newReleases: any[] = [];
  baseURL:string = "https://api.spotify.com/v1";
  token: string = "BQD6R6QgAcfRx1nMjC0FkVu3vYJisdNahwtAuyY-yC2W_IL7jKDk1FusUdFH_fP3MwKno7Bvd80_aD0WkRo";
  

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });

    return this.http.get(`${this.baseURL}/browse/new-releases`, { headers })
      .pipe(map((data:any) => data.albums.items));
  }

  getArtist(artist: string) {
    const urlArtists: string = `${this.baseURL}/search?q=${artist}&type=artist`;
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });

    return this.http.get(urlArtists, { headers });
  }

  getTopTracksOfArtist(artistId: string) {
    const urlTopTracks: string = `${this.baseURL}/artists/${artistId}/top-tracks?country=MX`;
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });

    return this.http.get(urlTopTracks, { headers }).pipe(map((data: any) => data.tracks));
  }

}
