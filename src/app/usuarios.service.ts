import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment'; 

import { Usuario } from './usuarios/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiURLBase: string = environment.apiURL + '/usuarios'  

  constructor( private http: HttpClient ) { } 

  salvar( usuario: Usuario ) : Observable<Usuario> {
      return this.http.post(`${this.apiURLBase}`, usuario )  
  }

  atualizar( usuario: Usuario ) : Observable<any> {
    return this.http.put(`${this.apiURLBase}/${usuario.id}`, usuario)  
  }

  getUsuarios() : Observable<Usuario[]> {  
    return this.http.get<Usuario[]>(`${this.apiURLBase}`) 
  } 

  getUsuarioById( id: number ) : Observable<Usuario> {
    return this.http.get<any>(`${this.apiURLBase}/${id}`) 
  }

  deletar(usuario: Usuario) : Observable<any> { 
    return this.http.delete<any>(`${this.apiURLBase}/${usuario.id}`) 
  }

}
