import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "capitalizado"
})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, args: any[]): string {
        return this.capitalizar(value);
    }


    capitalizar(cadena: string): string {
        let partesCadena: string[] = cadena.split(" ");
        let partesRegreso: string[] = [];

        for (let parteCadena of partesCadena) {
            parteCadena = parteCadena.toLowerCase();
            parteCadena = parteCadena.charAt(0).toUpperCase() + parteCadena.substring(1);
            partesRegreso.push(parteCadena);
        }

        return partesRegreso.join(" ");
    }
}