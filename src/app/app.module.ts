import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';

import { TemplateModule} from './template/template.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { FuncoesModule } from './funcoes/funcoes.module';
import { ProdutosService } from './produtos.service';
import { UsuariosService } from './usuarios.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
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
