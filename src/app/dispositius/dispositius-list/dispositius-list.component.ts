import { Component, OnInit } from '@angular/core';
import { Dispositiu } from '../dispositiu';
import { DispositiusService } from '../dispositius.service';

@Component({
  selector: 'app-dispositius-list',
  templateUrl: './dispositius-list.component.html',
})
export class DispositiusListComponent implements OnInit {

  dispositius: Dispositiu[] = [];

  criteri: string = '';

  constructor(private dispositiusService: DispositiusService) { }

  ngOnInit(): void {
    this.dispositiusService.getDispositius().subscribe(
      dispositius => this.dispositius = dispositius
    )
  }

}
