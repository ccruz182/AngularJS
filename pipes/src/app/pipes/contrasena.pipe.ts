import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, estado:boolean): any {
    let retorno = value;

    if (estado) {
      retorno = "";
      for (let i = 0; i < value.length; i++) {
        retorno += "*";
      }
    } 
    return retorno;
  }

}
