import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FuncoesRoutingModule } from './funcoes-routing.module';
import { FuncoesFormComponent } from './funcoes-form/funcoes-form.component';
import { FuncoesListaComponent } from './funcoes-lista/funcoes-lista.component';


@NgModule({
  declarations: [
    FuncoesFormComponent,
    FuncoesListaComponent
  ],
  imports: [
    CommonModule,
    FuncoesRoutingModule,
    RouterModule,
    FormsModule
  ], exports: [
    FuncoesFormComponent,
    FuncoesListaComponent
  ]
})
export class FuncoesModule { }
