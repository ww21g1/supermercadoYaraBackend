import React from "react";

import '../css/usuarios/usuarios.css'
import { withRouter } from'react-router-dom'


class Usuarios extends React.Component{

    prepareCadastrar = () => {
        this.props.history.push('/cadastrousuario')
      }

     render(){
        return(
            <>
            <button onClick={this.prepareCadastrar} id="cadastro" className="btn btn-primary">Cadastrar Usuário</button>
            <div class="container">
                   
            <table class="table table-bordered">
            <thead>
                <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th >Data de criação</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>John</td>
                <td>Doe</td>
                <td>03/11/1990</td>
                <td className='botoes'>
                    <button class="w-10 btn btn-sm btn-primary" type="reset">Excluir</button>
                    <button class="w-10 btn btn-sm btn-primary" type="submit">Editar</button>
                </td>
                </tr>
                <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>03/11/1990</td>
                <td className='botoes'>
                    <button class="w-10 btn btn-sm btn-primary" type="reset">Excluir</button>
                    <button class="w-10 btn btn-sm btn-primary" type="submit">Editar</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </>
        );
    }

}

export default withRouter (Usuarios)