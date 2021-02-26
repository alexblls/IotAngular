import { Component, OnInit } from '@angular/core';
import { AutenticacioService } from 'src/app/usuari/autenticacio.service';
import { Usuari } from 'src/app/usuari/usuari';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuari: Usuari = {login:" ", contrasenya:""};

  constructor(private autenticacio: AutenticacioService) { }
  recordar = false;

  ngOnInit(): void {
    if (localStorage.getItem('login')) {
      this.usuari.login = localStorage.getItem('login') || "";
      this.recordar = true;
    }
    
  }

  login(){
    
    this.autenticacio.autenticacioUsuari(this.usuari).subscribe(
      u => {
        console.log(u);
        this.usuari = u;
      },
      e => console.log(e)
    );
  }

}
