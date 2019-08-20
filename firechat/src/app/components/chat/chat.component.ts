import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje: string = "";
  elemento: HTMLElement;

  constructor(private chatService: ChatService) {    
    this.chatService.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 30);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById("app-mensajes");
  }

  enviarMensaje() {
    if (this.mensaje !== "") {
      this.chatService.agregarMensaje(this.mensaje);
      this.mensaje = "";
    }
  }
}
