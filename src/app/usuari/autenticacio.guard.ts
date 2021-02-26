import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacioService } from './autenticacio.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacioGuard implements CanActivate {

  constructor (
    private autenticacio: AutenticacioService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // return this.autenticacio.isAuth();
    if (this.autenticacio.isAuth()) {
      return true;      
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
