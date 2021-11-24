import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produto: Produto;
  success: boolean = false;
  errors: String[];
  
  constructor( private service: ProdutosService) { 
    this.produto = new Produto();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
    .salvar(this.produto)
    .subscribe( response => {
      this.success = true;    
    }, errorResponse => {
      this.errors = errorResponse.error.errors;     
    })
  }
}
