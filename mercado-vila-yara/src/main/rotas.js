import React from "react";

import Login from '../views/Login'
import UsuarioCadastro from "../views/UsuarioCadastro";

import { BrowserRouter, Route} from 'react-router-dom'
import Usuarios from "../views/Usuarios";

   


function Rotas(){
    return(
        <BrowserRouter>
           
                <Route path="/login" component={Login} />
                <Route path="/cadastrousuario" component={UsuarioCadastro} />
                <Route path="/UsuarioS" component={Usuarios} />                
           
        </BrowserRouter>
    )
}

export default Rotas
   
