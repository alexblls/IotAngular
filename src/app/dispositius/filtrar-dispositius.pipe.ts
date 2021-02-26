import { Pipe, PipeTransform } from '@angular/core';
import { Dispositiu } from './dispositiu';

@Pipe({
  name: 'filtrarDispositius'
})
export class FiltrarDispositiusPipe implements PipeTransform {

  transform(dispositius: Dispositiu[], criteri: string): Dispositiu[] {
    criteri != criteri ? criteri.toLocaleLowerCase() : null;
    dispositius = criteri ? dispositius.filter(d => d.nom.toLocaleLowerCase().includes(criteri)): dispositius;
    return dispositius;
  }

}
