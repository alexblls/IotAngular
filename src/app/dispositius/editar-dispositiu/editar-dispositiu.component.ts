import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dispositiu } from '../dispositiu';
import { DispositiusService } from '../dispositius.service';

@Component({
  selector: 'app-editar-dispositiu',
  templateUrl: './editar-dispositiu.component.html',
  styleUrls: ['./editar-dispositiu.component.css']
})
export class EditarDispositiuComponent implements OnInit {

  dispositiu!: Dispositiu;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositiusService: DispositiusService
    ) { }

  ngOnInit(): void {
    this.dispositiu = this.activatedRoute.snapshot.data['dispositiu'];
  }
}
