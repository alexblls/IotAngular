import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enxufat'
})
export class EnxufatPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if (value) {
      return "on";
    } else {
      return "off";
    }
  }

}
