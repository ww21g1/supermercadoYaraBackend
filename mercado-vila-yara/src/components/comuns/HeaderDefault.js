import React from "react";

import '../../css/usuarios/headerDefault.css'

class HeaderDefault extends React.Component{

    render(){
        return(
            
            <header >
            <nav >

                <div><img src="assets/logo.png" alt="Logo do supermercado Vila Yara" width="70" height="60" class="img"></img></div>
                <ul>             
                
                    <li><a class="menu" href="#">Categorias</a></li>
                    <li><a class="menu" href="#">Usuarios</a></li>
                    <li><a class="menu" href="#">Sair</a></li>
                </ul>  
            </nav>
        </header>
        
        );
    }

}

export default HeaderDefault