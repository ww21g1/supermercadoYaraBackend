import { Component, OnInit } from '@angular/core';

import { FuncoesService } from 'src/app/funcoes.service';
import { Funcao } from '../funcao'; 

@Component({
  selector: 'app-funcoes-lista',
  templateUrl: './funcoes-lista.component.html',
  styleUrls: ['./funcoes-lista.component.css']
})

export class FuncoesListaComponent implements OnInit {

  funcoes: Funcao[]; 

  constructor(private service: FuncoesService) {  
 
  } 

  ngOnInit(): void {
    this.service      
    .getFuncoes()
    .subscribe( resposta => this.funcoes = resposta )
  }

}