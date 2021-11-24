import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Produto } from './produtos/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient ) {  }

  salvar( produtos: Produto ) : Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/produtos' , produtos);
  }

  getProdutos() : Observable<Produto[]> {  
    return this.http.get<Produto[]>('http://localhost:8080/produtos')
  } 

}

