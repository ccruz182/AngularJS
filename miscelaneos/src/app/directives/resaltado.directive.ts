import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor: string;


  constructor(private elementRef: ElementRef) {
    console.log("Directiva llamada");
  }

  @HostListener('mouseenter') mouseEntro() {
    this.elementRef.nativeElement.style.backgroundColor = this.nuevoColor;
  }

  @HostListener('mouseleave') mouseSalio() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }

}
