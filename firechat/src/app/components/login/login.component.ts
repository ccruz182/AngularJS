import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit {
  noUser: boolean = true;
  constructor(private chatService: ChatService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      
      if (!user) {
        return;
      }

      this.noUser = false;  
    });
  }

  ngOnInit() {}

  ingresar() {
    this.chatService.login();
    this.noUser = true;
  }
}
