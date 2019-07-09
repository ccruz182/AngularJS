import { RouterModule, Routes } from "@angular/router";

import { HeroeComponent } from "./components/heroes/heroe/heroe.component";
import { HeroesComponent } from "./components/heroes/heroes/heroes.component";

const APP_ROUTES: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
