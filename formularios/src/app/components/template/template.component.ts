import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  usuario: any = {
    "nombre": "Cesar",
    "apellido": "Cruz",
    "email": "cesar.cruz182@gmail.com"
  }
  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("****", forma);
  }

}
