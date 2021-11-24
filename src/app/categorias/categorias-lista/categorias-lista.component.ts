import { Component, OnInit } from '@angular/core';

import { CategoriasService } from 'src/app/categorias.service';
import { Categoria } from '../categoria'; 

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.css']
})

export class CategoriasListaComponent implements OnInit {

  categorias: Categoria[]; 

  constructor(private service: CategoriasService) {  
 
  } 

  ngOnInit(): void {
    this.service      
    .getCategorias()
    .subscribe( resposta => this.categorias = resposta )
  }

}