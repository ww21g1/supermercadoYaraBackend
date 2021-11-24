import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Funcao } from './funcoes/funcao';


@Injectable({
  providedIn: 'root'
})
export class FuncoesService {

  constructor( private http: HttpClient ) { } 

  salvar( funcoes: Funcao ) : Observable<Funcao> {
      return this.http.post("http://localhost:8080/funcao", funcoes )  
  }

  getFuncoes() : Observable<Funcao[]> {  
    return this.http.get<Funcao[]>('http://localhost:8080/funcao')
  } 

}