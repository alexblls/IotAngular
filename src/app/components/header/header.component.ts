import { Component, OnInit } from '@angular/core';
import { AutenticacioService } from 'src/app/usuari/autenticacio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private autenticacio: AutenticacioService) { }

  ngOnInit(): void {
  }

  logout(){
    this.autenticacio.logOut();
  }

}
