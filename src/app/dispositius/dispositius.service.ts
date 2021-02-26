import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dispositiu } from './dispositiu';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DispositiusService {

  constructor(private http: HttpClient) { }

  dispositiusURL = '/assets/dispositius.json';

  getDispositius(): Observable<Dispositiu[]> {
    return this.http.get<{ dispositius: Dispositiu[] }>(this.dispositiusURL).pipe(
      map(response => response.dispositius)
    );
  }

  getDispositiu(id: number): Observable<Dispositiu> {
    
    return this.http.get<{ dispositius: Dispositiu[] }>(this.dispositiusURL).pipe(
      map(response => {
        let retornar = response.dispositius.filter(d => d.id == id)[0]
        return retornar;
      })
    );
  }
  
}
