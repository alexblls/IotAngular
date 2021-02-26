import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuari } from './usuari';

@Injectable({
  providedIn: 'root'
})
export class AutenticacioService {

  constructor(private http: HttpClient) { }

  url = '/assets/usuaris.json';

  // autenticacioUsuari(usuari: Usuari, recordar:boolean){
  //   return this.http.get<Usuari>(this.url)
  //   .pipe(map(u => {
  //     if(recordar) {
  //       u['contrasenya']=usuari.contrasenya;
  //       localStorage.setItem('login',u.login);
  //     } else {
  //       localStorage.removeItem('login');
  //     }
  //     return u;
  //   }));
  // }
  autenticacioUsuari(user: Usuari):Observable<Usuari>{
    return this.http.get<Usuari>(this.url)
    .pipe(map(u =>{
      if (u.token) {
        localStorage.setItem('token',u.token);
        // this.router.navigate(['/products']);
        // this.loguedInfo.next(true)
    }
      return u;
    }));
  }



  isAuth(): boolean{
    if (localStorage.getItem('token')) {
      return true;      
    } else {
      return false;
    }
  }

  logOut(): void{
    localStorage.removeItem('token');
  }
}
