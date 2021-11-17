import React from "react";

import Login from '../views/Login'
import UsuarioCadastro from "../views/UsuarioCadastro";

import { HashRouter, Route} from 'react-router-dom'
   


function Rotas(){
    return(
        <HashRouter>
           
                <Route path="/login" component={Login} />
                <Route path="/cadastrousuario" component={UsuarioCadastro} />
           
        </HashRouter>
    )
}

export default Rotas
   
