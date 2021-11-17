import React from "react";

import '../../css/usuarios/headerAdm.css'

class HeaderAdm extends React.Component{

    render(){
        return(
            
            <header >
            <nav >

                <div><img src="assets/logo.png" alt="Logo do supermercado Vila Yara" width="70" height="60" className="img"></img></div>
                <ul>             
                
                  <li><a className="menu" href="#">Voltar</a></li>
                </ul>  
                <h4>Bem vindo Ana (<span>adm</span>)</h4>
            </nav>
        </header>
        
        );
    }

}

export default HeaderAdm