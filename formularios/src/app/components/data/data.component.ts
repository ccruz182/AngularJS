import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent {
  forma: FormGroup;

  usuario:Object = {
    "nombre": "Cesar",
    "apellido": "CA",
    "correo": "cesar.cruz182@gmail.com"
  }

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'apellido': new FormControl("", Validators.required),
      'correo': new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ])
    });

    // this.forma.setValue(this.usuario);
  }

  guardarCambios() {
    console.log("**", this.forma);
    console.log(this.usuario)
    this.forma.reset({});
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    );
  }
}
