import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncoesFormComponent } from './funcoes-form/funcoes-form.component'
import { FuncoesListaComponent } from './funcoes-lista/funcoes-lista.component';

const routes: Routes = [
  { path: 'funcoes/cadastro' , component: FuncoesFormComponent },
  { path: 'funcoes' , component: FuncoesListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncoesRoutingModule { }
