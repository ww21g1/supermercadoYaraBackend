import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { Observable } from 'rxjs';

import { UsuariosService } from 'src/app/usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  success: boolean = false;
  errors: String[];
  id: number; 
  

  constructor( 
    private service: UsuariosService,
    private router: Router,
    private activatedRoute : ActivatedRoute
    ) { 
    this.usuario = new Usuario();
  }


  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getUsuarioById(this.id)
            .subscribe( 
              response => this.usuario = response 
              
            )
        }
    })
  }

   onSubmit(){
    if(this.id){

      this.service
        .atualizar(this.usuario)
        .subscribe(response => {
            this.success = true;
            this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o usuario.']
        })


    }else{

      this.service
        .salvar(this.usuario)
          .subscribe( response => {
            this.success = true;
            this.errors = [];
            this.usuario = response;
          } , errorResponse => {
            this.success = false;
          })
          this.errors = ['Atualização realizada com sucesso.']
    }

  }

}