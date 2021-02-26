import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dispositiu } from '../dispositiu';

@Component({
  selector: 'app-dispositius-item',
  templateUrl: './dispositius-item.component.html',

})
export class DispositiusItemComponent implements OnInit {

  @Input() dispositiu!: Dispositiu;

  constructor() { }

  auxRatting!: any;
  @Output() rattingChanged = new EventEmitter<number>();

  ngOnInit(): void {
    this.auxRatting = this.dispositiu.ratting;
    
  }
  puntuar(i: number): void {
    this.rattingChanged.emit(this.auxRatting);
  }

  

}
