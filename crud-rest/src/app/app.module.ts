import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule }   from '@angular/forms';


import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe/heroe.component";

import { APP_ROUTING } from "./app.routes";

import { HeroesService } from "./services/heroes.service";
import { OpcionesComponent } from './components/opciones/opciones.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroeComponent, OpcionesComponent],
  imports: [BrowserModule, HttpModule, FormsModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
