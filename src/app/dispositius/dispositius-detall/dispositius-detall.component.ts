import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositiu } from '../dispositiu';
import { DispositiusService } from '../dispositius.service';

@Component({
  selector: 'app-dispositius-detall',
  templateUrl: './dispositius-detall.component.html',
})
export class DispositiusDetallComponent implements OnInit {

  dispositiu!: Dispositiu;

  constructor(private activatedRoute: ActivatedRoute, private dispositiusService: DispositiusService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(d => {
      console.log(d);
      
      this.dispositiusService.getDispositiu(d.id).subscribe(di => this.dispositiu = di);
    });
  }

}
