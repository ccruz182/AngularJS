import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

import { Mensaje } from "../interfaces/mensaje.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private chatsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      
      if (!user) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;     
    });
  }

  cargarMensajes() {
    this.chatsCollection = this.afs.collection<Mensaje>("chats", ref =>
      ref.orderBy("fecha", "desc").limit(15)
    );

    return this.chatsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        this.chats = [];

        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }

        return this.chats;
      })
    );
  }

  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      fecha: new Date().getTime(),
      mensaje: texto,
      uid: this.usuario.uid
    };

    return this.chatsCollection.add(mensaje);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
