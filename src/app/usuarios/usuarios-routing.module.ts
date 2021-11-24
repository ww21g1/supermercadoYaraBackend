import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component'
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component'

const routes: Routes = [
  { path: 'usuarios/cadastro' , component: UsuariosFormComponent },
  { path: 'usuarios/cadastro/:id' , component: UsuariosFormComponent },
  { path: 'usuarios' , component: UsuariosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
