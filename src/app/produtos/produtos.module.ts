import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';


@NgModule({
  declarations: [
    ProdutosFormComponent,
    ProdutosListaComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    ProdutosFormComponent
  ]
})
export class ProdutosModule { }
