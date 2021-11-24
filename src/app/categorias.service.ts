import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from './categorias/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private http: HttpClient ) { } 

  salvar( categorias: Categoria ) : Observable<Categoria> {
      return this.http.post("http://localhost:8080/categorias", categorias )  
  }

  getCategorias() : Observable<Categoria[]> {  
    return this.http.get<Categoria[]>('http://localhost:8080/categorias')
  } 

}