import { Component, OnInit } from '@angular/core';

import { CategoriasService } from 'src/app/categorias.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})

export class CategoriasFormComponent implements OnInit {

  categoria : Categoria;
  success: boolean = false;
  errors: String[];  

  constructor( private service: CategoriasService ) { 
    this.categoria = new Categoria();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
    .salvar(this.categoria)
    .subscribe( response => {
      this.success = true;    
    }, errorResponse => {
      this.errors = errorResponse.error.errors;     
    })
  } 

}
