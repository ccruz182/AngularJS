import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { HttpClientModule } from "@angular/common/http";

/* Rutas */
import { ROUTES } from './app.routes';

/* Servicios */
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MaterialCardComponent } from './components/material-card/material-card.component';
import { TopTracksArtistaComponent } from './components/top-tracks-artista/top-tracks-artista.component';
import { TopTrackCardComponent } from './components/top-track-card/top-track-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    MaterialCardComponent,
    TopTracksArtistaComponent,
    TopTrackCardComponent,       
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
