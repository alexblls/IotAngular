import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinTemps]',
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: MinTempsDirective, 
    multi: true}]
})
export class MinTempsDirective implements Validator {

  @Input('appMinTemps') minTemps!: string;

  constructor() { }

  validate( c: AbstractControl): {[key:string]: any} | null{
    if (this.minTemps && c.value) {
      if (this.minTemps > c.value) {
        return {minTemps: true}
      }
    }
    return null;
  }

}
