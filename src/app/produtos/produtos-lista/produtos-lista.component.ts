import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/produtos.service';
import { Produto } from '../produto'; 

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})

export class ProdutosListaComponent implements OnInit {

  produtos: Produto[]; 

  constructor(private service: ProdutosService) {  
 
  } 

  ngOnInit(): void {
    this.service      
    .getProdutos()
    .subscribe( resposta => this.produtos = resposta )
  }

}
