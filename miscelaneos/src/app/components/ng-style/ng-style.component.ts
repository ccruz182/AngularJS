import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: []
})
export class NgStyleComponent implements OnInit {

  estilo: object = {
    "font-size": "10px"
  };

  constructor() { }

  ngOnInit() {
  }

  cambiar() {  
    console.log("CAMBIAR");
    const fS = parseInt(this.estilo["font-size"], 10) + 10; 
    console.log("fS ->", fS);     
    this.estilo = {
      "font-size": `${fS}px`
    }
  }
}
