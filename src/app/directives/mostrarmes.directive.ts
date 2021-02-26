import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostrarmes]'
})
export class MostrarmesDirective {

  constructor(private e: ElementRef, private r: Renderer2) { }

  @Input() elementMostrar!: any;

  @HostListener('mouseenter')
  entraRatoli(){
    // let d = this.e.nativeElement.querySelector('.ocultar');
    this.r.setStyle(this.elementMostrar, "display", '');
    // this.e.nativeElement.querySelector('.ocultar').style.display="";
  }

  @HostListener('mouseleave')
  ixRatoli(){
    // let d = this.e.nativeElement.querySelector('.ocultar');
    this.r.setStyle(this.elementMostrar, "display", 'none');
    // this.e.nativeElement.querySelector('.ocultar').style.display="none";

  }

}
