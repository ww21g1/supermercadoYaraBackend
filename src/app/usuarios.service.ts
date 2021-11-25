import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from './usuarios/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { } 

  salvar( usuario: Usuario ) : Observable<Usuario> {
      return this.http.post("http://localhost:8080/usuarios", usuario )  
  }

  atualizar( usuario: Usuario ) : Observable<any> {
    return this.http.put(`http://localhost:8080/usuarios/${usuario.id}`, usuario)  
  }

  getUsuarios() : Observable<Usuario[]> {  
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios')
  } 

  getUsuarioById( id: number ) : Observable<Usuario> {
    return this.http.get<any>(`http://localhost:8080/usuarios/${id}`)
  }

  deletar(usuario: Usuario) : Observable<any> { 
    return this.http.delete<any>(`http://localhost:8080/usuarios/${usuario.id}`) 
  }

}
