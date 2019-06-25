import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../services/auth.service";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: []
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  isCollapsed = true;
  profile: any;

  private auth0Client: Auth0Client;

  constructor(private auth: AuthService) {    
  }

  async ngOnInit() {
    this.auth0Client = await this.auth.getAuth0Client();

    this.auth.isAuthenticated.subscribe(value => {      
      this.isAuthenticated = value;
    });

    this.auth.profile.subscribe(profile => {
      this.profile = profile;
    });
  }

  async login() {
    await this.auth0Client.loginWithRedirect({    
      redirect_uri: `http://localhost:4200/callback`
    });    
  }

  salir() {

  }
}
