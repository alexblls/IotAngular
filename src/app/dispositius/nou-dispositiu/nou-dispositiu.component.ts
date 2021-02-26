import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormArray } from '@angular/forms';
import { Dispositiu } from '../dispositiu';

@Component({
  selector: 'app-nou-dispositiu',
  templateUrl: './nou-dispositiu.component.html',
})
export class NouDispositiuComponent implements OnInit {
  dispositiu!: Dispositiu;

  formDispositiu!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  crearFormulari(){
    this.formDispositiu = this.formBuilder.group({
      id: [0, [Validators.required, Validators.min(0)]],
      nom: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      consum: [],
      tipo: [0, [Validators.required, Validators.min(1), Validators.max(4)]]
    });
  }

  get idValid(){
    return this.formDispositiu.get('id');
  }

  get nomValid(){
    return this.formDispositiu.get('nom');
  }

  get tipoValid(){
    return this.formDispositiu.get('tipo');
  }

  ngOnInit(): void {
    this.crearFormulari();
  }
}
