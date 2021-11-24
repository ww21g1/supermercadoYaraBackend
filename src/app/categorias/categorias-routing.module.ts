import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasFormComponent } from './categorias-form/categorias-form.component'
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';

const routes: Routes = [
  { path: 'categorias/cadastro' , component: CategoriasFormComponent },
  { path: 'categorias' , component: CategoriasListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
