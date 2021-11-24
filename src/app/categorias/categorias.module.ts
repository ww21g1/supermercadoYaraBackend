import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';


@NgModule({
  declarations: [
    CategoriasFormComponent,
    CategoriasListaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    RouterModule,
    FormsModule
  ], exports: [
    CategoriasFormComponent,
    CategoriasListaComponent
  ]
})
export class CategoriasModule { }
