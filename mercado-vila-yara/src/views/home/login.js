import React from "react";

import '../../css/home/login.css'

class Login extends React.Component{

    render(){
        return(
            <form>
            <fieldset>
            <img class="mb-4" src="assets/logo10.svg" alt="Logo Supercado Vila Yara" width="252" height="147"/>
              <h1>Bem Vindo</h1>
              
              <div className="form-group">
                <label for="exampleInputEmail1" className="form-label mt-4">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1" className="form-label mt-4">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
          </form>
        );
    }

}

export default Login