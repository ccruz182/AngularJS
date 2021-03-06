import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTING } from "./app.routes";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PreciosComponent } from "./components/precios/precios.component";
import { ProtegidaComponent } from "./components/protegida/protegida.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreciosComponent,
    ProtegidaComponent,
    HomeComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
