import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';

import { TemplateModule} from './template/template.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { FuncoesModule } from './funcoes/funcoes.module';
import { ProdutosService } from './produtos.service';
import { UsuariosService } from './usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ProdutosModule,
    UsuariosModule,
    CategoriasModule,
    FuncoesModule
  ],
  providers: [
    ProdutosService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
