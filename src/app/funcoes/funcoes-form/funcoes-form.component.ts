import { Component, OnInit } from '@angular/core';

import { FuncoesService } from 'src/app/funcoes.service';
import { Funcao } from '../funcao';

@Component({
  selector: 'app-funcoes-form',
  templateUrl: './funcoes-form.component.html',
  styleUrls: ['./funcoes-form.component.css']
})

export class FuncoesFormComponent implements OnInit {

  funcao : Funcao;
  success: boolean = false;
  errors: String[];  

  constructor( private service: FuncoesService ) { 
    this.funcao = new Funcao();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
    .salvar(this.funcao)
    .subscribe( response => {
      this.success = true;    
    }, errorResponse => {
      this.errors = errorResponse.error.errors;     
    })
  } 

}