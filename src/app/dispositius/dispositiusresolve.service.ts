import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Dispositiu } from './dispositiu';
import { DispositiusService } from './dispositius.service';

@Injectable({
  providedIn: 'root'
})
export class DispositiusresolveService implements Resolve<Dispositiu> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    return this.dispositiusService.getDispositiu(route.params.id).pipe(
      catchError(error => {this.router.navigate(['/dispositius']);
      return of(null);
    })
    )
  }

  constructor(private dispositiusService: DispositiusService, private router: Router) { }
}
