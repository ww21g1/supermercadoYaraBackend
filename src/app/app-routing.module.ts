import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';
import { FuncoesFormComponent } from './funcoes/funcoes-form/funcoes-form.component';
import { FuncoesListaComponent } from './funcoes/funcoes-lista/funcoes-lista.component';
import { LayoutComponent } from './layout/layout.component';

import { LoginComponent } from './login/login.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosListaComponent } from'./produtos/produtos-lista/produtos-lista.component'
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: '', component: LayoutComponent, children: [
    { path : 'produtos', component: ProdutosListaComponent },
    { path : 'produtos/cadastro', component: ProdutosFormComponent },
    { path : 'usuarios', component: UsuariosListaComponent },
    { path : 'usuarios/cadastro', component: UsuariosFormComponent },
    { path : 'categorias', component: CategoriasListaComponent },
    { path : 'categorias/cadastro', component: CategoriasFormComponent },
    { path : 'funcoes', component: FuncoesListaComponent },
    { path : 'funcoes/cadastro', component: FuncoesFormComponent },
    { path: '' , redirectTo: '/produtos', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
