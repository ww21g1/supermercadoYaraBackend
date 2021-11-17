import React from "react";

import '../css/usuarios/usuarioCadastro.css'



class UsuarioCadastro extends React.Component{

    state = { 
        username: '',
        nome: '',
        sobrenome: '',
        email: '',
        funcao: '',
      }
    
      entrar = () => {
        console.log('Username: ', this.state.username);
        console.log('Nome: ', this.state.nome);
        console.log('Sobrenome: ', this.state.sobrenome);
        console.log('Email: ', this.state.email);
        console.log('Funcao: ', this.state.funcao);
        
      }

     
    render(){
        return(
            <form>
            <fieldset>
            
              <h1>Cadastro de usuário</h1>
              
              <div className="form-group">
                <label htmlFor="exampleInpuUser1" className="form-label mt-4">User</label>
                <input type="text" 
                value={this.state.username} 
                onChange={e => this.setState({username: e.target.value})} 
                className="form-control" id="exampleInputUser1" placeholder="User"/>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInpuName1" className="form-label mt-4">Nome</label>
                <input type="text" 
                value={this.state.nome} 
                onChange={e => this.setState({nome: e.target.value})} 
                className="form-control" id="exampleInputName1" placeholder="Nome"/>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputLast1" className="form-label mt-4">Sobrenome</label>
                <input type="text" 
                value={this.state.sobrenome} 
                onChange={e => this.setState({sobrenome: e.target.value})} 
                className="form-control" id="exampleInputLast1" placeholder="Sobrenome"/>
              </div>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                <input type="email" value={this.state.email}
                onChange={e => this.setState({email: e.target.value})} 
                className="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                <label htmlFor="function" className="form-label mt-4">Funcao</label>
                <select  className="form-select" id="exampleSelect1">
                    <option>Administrador</option>
                    <option>Padrão</option>
                </select>
            </div>
            
            <div className="botao">
              <button onClick={ this.entrar} className="btn btn-primary">Cadastrar</button>
              <button className="btn btn-primary">Gerar senha</button>
            </div>

            </fieldset>
          </form>
        );
    }

}

export default UsuarioCadastro 