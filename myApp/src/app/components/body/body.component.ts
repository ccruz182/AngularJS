import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar:boolean;
    personas:string[];

    constructor() {
        this.mostrar = true;
        this.personas = ['Cesar', 'Persona2'];
    }
}