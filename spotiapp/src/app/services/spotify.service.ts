import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {
  newReleases: any[] = [];
  token: string = "BQC903AvZFyvcI_kKSyyvMBNMIjOK1MIyi7dtO21gWFucraTJ8hPlAs9qLi2i3I7ZZlZ0NbGvaPIQEG0K9w";

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
  }

  getArtist(artist: string) {
    const urlArtists: string = `https://api.spotify.com/v1/search?q=${artist}&type=artist`;
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });

    return this.http.get(urlArtists, { headers });
  }

  getTopTracksOfArtist(artistId: string) {
    const urlTopTracks: string = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=MX`;
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });

    return this.http.get(urlTopTracks, { headers });
  }

}
