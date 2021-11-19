import React from "react";

import '../css/home/login.css'
import axios from "axios";

class Login extends React.Component{

  state = { 
    email: '',
    senha: ''
  }

  entrar = () => {
    axios.post('https://yarasupermercado.herokuapp.com/login', {
        email: this.state.email,
        senha: this.state.senha
    }).then( response => {
      console.log(response);
    }).catch( erro => {
      console.log(erro.response)
  })
}

    render(){
        return(
            <form>
            <fieldset>
            <img className="mb-4" src="assets/logo10.svg" alt="Logo Supercado Vila Yara" width="252" height="147"/>
              <h1>Bem Vindo</h1>
              
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                <input type="email" value={this.state.email}
                onChange={e => this.setState({email: e.target.value})} 
                className="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" placeholder="Enter email"/>
            
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Senha</label>
                <input type="password" 
                value={this.state.senha} 
                onChange={e => this.setState({senha: e.target.value})} 
                className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              
              <button onClick={ this.entrar} className="btn btn-primary">Entrar</button>
            </fieldset>
          </form>
        );
    }

}

export default Login